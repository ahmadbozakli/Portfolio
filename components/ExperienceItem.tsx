import type { Experience } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, CalendarDays } from "lucide-react";
import Image from "next/image";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <Card
      className={`mb-6 ${
        experience.id.startsWith("edu") ? "bg-[#414553]" : "bg-[#0f1117]"
      } border border-white/10 shadow-md hover:shadow-primary/20 transition-all duration-300 rounded-xl`}
    >
      <CardHeader className="flex flex-row items-start gap-4">
        {experience.logoUrl ? (
          <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden border bg-muted">
            <Image
              src={experience.logoUrl}
              alt={`${experience.company} logo`}
              layout="fill"
              objectFit="contain"
              data-ai-hint={experience.logoHint || "company logo"}
            />
          </div>
        ) : (
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            <Briefcase className="h-6 w-6" />
          </div>
        )}

        <div>
          <CardTitle className="text-xl font-semibold text-white">
            {experience.role}
          </CardTitle>
          <CardDescription className="text-base text-[#38bdf8]">
            {experience.company}
          </CardDescription>
          <div className="flex items-center text-sm text-gray-400 mt-1">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{experience.duration}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
