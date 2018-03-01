const moment = require('../lib/moment/moment.js');

function topicListFormatter (topics) {
  for (let i = 0; i < topics.length; i++) {
    topics[i] = topicInfoFormatter(topics[i]);
  }
  return topics;
}

function topicInfoFormatter (topic) {
  topic['created'] = dateTimeFormatter(topic['created']);
  topic['last_touched'] = dateTimeFormatter(topic['last_touched']);
  topic['last_modified'] = dateTimeFormatter(topic['last_modified']);
  topic.member = memberInfoFormatter(topic.member);
  topic.node = nodeInfoFormatter(topic.node);
  return topic;
}

function memberInfoFormatter (member) {
  member = avatarFormatter(member);
  return member;
}

function nodeInfoFormatter (node) {
  node = avatarFormatter(node);
  return node;
}

function replyListFormatter (replies) {
  for (let i = 0; i < replies.length; i++) {
    replies[i] = replyInfoFormatter(replies[i]);
  }
  return replies;
}

function replyInfoFormatter (reply) {
  reply['created'] = dateTimeFormatter(reply['created']);
  reply['last_modified'] = dateTimeFormatter(reply['last_modified']);
  reply.member = memberInfoFormatter(reply.member);
  return reply;
}

function avatarFormatter (info) {
  info['avatar_mini'] = info['avatar_mini'].replace(/^\/\//gi, 'https://');
  info['avatar_normal'] = info['avatar_normal'].replace(/^\/\//gi, 'https://');
  info['avatar_large'] = info['avatar_large'].replace(/^\/\//gi, 'https://');
  return info;
}

function dateTimeFormatter (timestamp) {
  return moment(timestamp * 1000).format('YYYY-MM-DD HH:mm:ss');
}

module.exports = {
  topicListFormatter: topicListFormatter,
  topicInfoFormatter: topicInfoFormatter,
  memberInfoFormatter: memberInfoFormatter,
  nodeInfoFormatter: nodeInfoFormatter,
  replyListFormatter: replyListFormatter,
  replyInfoFormatter: replyInfoFormatter,
  dateTimeFormatter: dateTimeFormatter
};
