import dayjs from 'dayjs';

/* Keys returned by the github api. The other keys in the array below
 * are mostly jokes. These are the keys the github api query searches for.
 */
export const githubKeys = [
  'stargazers_count',
  'watchers_count',
  'forks',
  'open_issues_count',
  'subscribers_count',
  'pushed_at',
];

// TODO To be provided by an API
const data = [
  {
    label: 'Amazon Sagemaker Examples',
    key: 'amazon-sagemaker-examples',
    value: '1',
    link: 'https://github.com/awslabs/amazon-sagemaker-examples',
  }, {
    label: 'Last updated at',
    key: 'pushed_at',
    value: dayjs().format('MMMM D, YYYY'),
    link: '',
  },
];

export default data;
