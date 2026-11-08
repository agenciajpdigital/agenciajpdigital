import { describe, expect, it } from "vitest";
import { partnerSolution, serviceCategories } from "@/data/services";

describe("original service artwork", () => {
  const services = [...serviceCategories.flatMap((category) => category.services), partnerSolution];

  it("retains all 13 existing services and the separate partner artwork", () => {
    expect(services).toHaveLength(14);
    expect(new Set(services.map((service) => service.id)).size).toBe(14);
    expect(services.every((service) => service.image?.startsWith("/__l5e/assets-v1/"))).toBe(true);
  });

  it("keeps the original PNG available for every losslessly compressed artwork", () => {
    const compressed = services.filter((service) => service.image?.endsWith("-lossless.webp"));
    expect(compressed).toHaveLength(10);
    for (const service of compressed) {
      expect(service.originalImage).toMatch(/^\/__l5e\/assets-v1\/.+\.png$/);
      expect(service.originalImage).not.toBe(service.image);
    }
  });
});