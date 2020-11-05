export function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Mail server is up and running \u2665' }),
  });
}