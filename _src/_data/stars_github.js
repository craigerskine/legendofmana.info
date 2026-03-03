const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
  const arr = [];
  const repo = 'craigerskine/legendofmana.info';
  const perPage = 100;

  try {
    let stargazers = await EleventyFetch(
      `https://api.github.com/repos/${repo}/stargazers?per_page=${perPage}`,
      {
        duration: '1d',
        type: 'json',
      }
    );
    for (const user of stargazers) {
      const profile = await fetchGitHubUser(user.login);
      arr.push({
        login: profile.login,
        name: profile.name,
        avatar_url: profile.avatar_url,
        html_url: profile.html_url,
        bio: profile.bio || null,
        company: profile.company || null,
        location: profile.location || null,
      });
    }

    console.log(`Fetched ${arr.length} stargazer profiles`);
    return arr;
  } catch (e) {
    console.error('Failed getting GitHub stargazers:', e.message);
    return [];
  }
};

async function fetchGitHubUser(login) {
  console.log(`Fetching profile: ${login}`);
  return EleventyFetch(`https://api.github.com/users/${login}`, {
    duration: '30d',
    type: 'json',
  });
}

async function fetchAllPages(repo) {
  let all = [];
  let page = 1;
  let url = `https://api.github.com/repos/${repo}/stargazers?per_page=100&page=${page}`;

  while (true) {
    const data = await EleventyFetch(url, { duration: '1d', type: 'json' });
    if (data.length === 0) break;
    all = all.concat(data);
    page++;
    url = `https://api.github.com/repos/${repo}/stargazers?per_page=100&page=${page}`;
  }
  return all;
}
