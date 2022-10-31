export const getSlug = (string) => {
    let slug = string.trim().replace(" ","-");
    slug = `${slug}`.toLocaleLowerCase();

    return slug;
}
