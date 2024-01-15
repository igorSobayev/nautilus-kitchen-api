import VError from 'verror'

export default function generateSlug ({ recipeTitle }) {
    if (!recipeTitle) {
        throw VError('Missing parameter recipeTitle')
    }

    const dateInMillisecs = Date.now();
    const dateInSecs = Math.round(dateInMillisecs / 1000);

    const slug = slugify(`${recipeTitle}-${dateInSecs}`)

   return slug
}

function slugify(str) {
    return String(str)
      .normalize('NFKD') // split accented characters into their base characters and diacritical marks
      .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
      .trim() // trim leading or trailing whitespace
      .toLowerCase() // convert to lowercase
      .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
      .replace(/\s+/g, '-') // replace spaces with hyphens
      .replace(/-+/g, '-'); // remove consecutive hyphens
  }
  