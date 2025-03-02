export const replaceMaterialLinks = (url: string) => {
  const routes = 'guides|customization|getting-started|discover-more';
  if (url.startsWith('/material')) {
    return url;
  }
  return url.replace(new RegExp(`(${routes})`), 'material/$1');
};

export const replaceComponentLinks = (url: string) => {
  if (url.startsWith('/x') || url.startsWith('/material')) {
    return url;
  }
  return url
    .replace(/\/components\/data-grid/, '/x/react-data-grid')
    .replace(/\/components\/(.*)/, '/material/react-$1');
};

export const replaceAPILinks = (url: string) => {
  if (url.startsWith('/x') || url.startsWith('/material') || !url.startsWith('/api')) {
    return url;
  }
  url = url
    .replace(/\/api\/data-grid(.*)/, '/x/api/mui-data-grid$1')
    .replace(
      /\/api\/(loading-button|tab-list|tab-panel|date-picker|date-time-picker|time-picker|calendar-picker|calendar-picker-skeleton|desktop-picker|mobile-date-picker|month-picker|pickers-day|static-date-picker|year-picker|masonry|timeline|timeline-connector|timeline-content|timeline-dot|timeline-item|timeline-opposite-content|timeline-separator|unstable-trap-focus|tree-item|tree-view)(.*)/,
      '/material/api/mui-lab/$1$2',
    )
    .replace(/\/api\/([^/]+-unstyled)(.*)/, '/material/api/mui-base/$1$2');

  if (url.startsWith('/x') || url.startsWith('/material')) {
    return url;
  }
  return url.replace(/\/api\/(.*)/, '/material/api/mui-material/$1');
};

export default function replaceUrl(url: string, asPath: string) {
  if (asPath.startsWith('/material/') || asPath.startsWith('/x/')) {
    return replaceMaterialLinks(replaceAPILinks(replaceComponentLinks(url)));
  }
  return url;
}
