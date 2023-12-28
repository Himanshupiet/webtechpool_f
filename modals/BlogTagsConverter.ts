import { BlogTag } from "@/types/blogTags";
import { BlogTagResponseType } from "@/types/blogTags";

export class BlogTagConverter implements BlogTag {
    id: number;
    name: string;
    label: string;
    value: string;
  

    constructor(data: BlogTagResponseType) {
        this.id = data?.id;
        this.name = data?.name;
        this.label = data?.label;
        this.value = data?.value;
    }
}