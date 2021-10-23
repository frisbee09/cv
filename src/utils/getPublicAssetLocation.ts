/**
 * Dynamically fetched static assets, like markdown posts are in the content folder.
 * This allows us to reference files in the JSON and pick them up later.
 *
 * This pattern comes from the CRA docs here
 * https://create-react-app.dev/docs/using-the-public-folder/
 * @param s
 * @returns
 */
export const getPublicAssetLocation = (s: string) =>
	`${process.env.PUBLIC_URL}/${s}`;
