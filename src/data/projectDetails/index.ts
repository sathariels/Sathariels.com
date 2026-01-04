import { ProjectDetail } from "./types";
import { purpleTree } from "./purple-tree";
import { shadowSlaveMask } from "./shadow-slave-mask";
import { flowerMask } from "./flower-mask";
import { vacuumCore } from "./vacuum-core";
import { thisWebsite } from "./this-website";
import { abstractWork1 } from "./abstract-work-1";

export const projectDetails: Record<string, ProjectDetail> = {
    [purpleTree.slug]: purpleTree,
    [shadowSlaveMask.slug]: shadowSlaveMask,
    [flowerMask.slug]: flowerMask,
    [vacuumCore.slug]: vacuumCore,
    [thisWebsite.slug]: thisWebsite,
    [abstractWork1.slug]: abstractWork1,
};

export type { ProjectDetail };
