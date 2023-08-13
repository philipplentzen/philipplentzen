import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  slug: {
    type: `string`,
    resolve: (page) => `/${page._raw.flattenedPath}`,
  },
};

export const Page = defineDocumentType(() => {
  return {
    name: `Page`,
    filePathPattern: `pages/**/*.mdx`,
    contentType: `mdx`,
    fields: {
      title: { type: `string`, required: true },
    },
    computedFields,
  };
});

export const Project = defineDocumentType(() => {
  return {
    name: `Project`,
    filePathPattern: `projects/**/*.mdx`,
    contentType: `mdx`,
    fields: {
      title: { type: `string`, required: true },
    },
    computedFields,
  };
});

export default makeSource({
  contentDirPath: `./content`,
  documentTypes: [Page, Project],
});
