import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type LeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  domain?: string;
  candidates?: string;
  deliveryMode?: string;
  location?: string;
  countryCode?: string;
  phone?: string;
};

const leadsFilePath = path.join(process.cwd(), "data", "leads.json");

const readLeads = async () => {
  try {
    const data = await fs.readFile(leadsFilePath, "utf-8");
    return JSON.parse(data) as LeadPayload[];
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim();

    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, message: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    const leads = await readLeads();
    const nextLead = {
      id: `${Date.now()}`,
      name,
      email,
      company,
      domain: body.domain || "",
      candidates: body.candidates || "",
      deliveryMode: body.deliveryMode || "",
      location: body.location || "",
      countryCode: body.countryCode || "",
      phone: body.phone || "",
      createdAt: new Date().toISOString(),
    };

    await fs.mkdir(path.dirname(leadsFilePath), { recursive: true });
    await fs.writeFile(
      leadsFilePath,
      JSON.stringify([...leads, nextLead], null, 2),
      "utf-8"
    );

    return NextResponse.json({
      success: true,
      message: "Thanks! Our team will reach out within 24 hours.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unable to save lead.",
      },
      { status: 500 }
    );
  }
}
