export function checkDefaultFilePath(defaultFilePath) {
  if (defaultFilePath === null || defaultFilePath === undefined) {
    console.error(
      'liproll: Property "defaultFilePath" Not found in "liproll.config.json", To fix this create a "liproll.config.json" file with "defaultFilePath" as a Property'
    );
  }
}
