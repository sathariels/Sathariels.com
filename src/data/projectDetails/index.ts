import { ProjectDetail } from "./types";
import { purpleTree } from "./purple-tree";
import { shadowSlaveMask } from "./shadow-slave-mask";
import { flowerMask } from "./flower-mask";
import { vacuumCore } from "./vacuum-core";
import { thisWebsite } from "./this-website";
import { sinOfSolace } from "./sin-of-solace";
import { midnightShard } from "./midnight-shard";

export const projectDetails: Record<string, ProjectDetail> = {
    [purpleTree.slug]: purpleTree,
    [shadowSlaveMask.slug]: shadowSlaveMask,
    [flowerMask.slug]: flowerMask,
    [vacuumCore.slug]: vacuumCore,
    [thisWebsite.slug]: thisWebsite,
    [sinOfSolace.slug]: sinOfSolace,
    [midnightShard.slug]: midnightShard,
};

export type { ProjectDetail };
