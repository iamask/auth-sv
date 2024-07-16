export default {
  async fetch(request, env) {
    const xCustomToken = request.headers.get('x-custom-token');
    
    switch (xCustomToken) {
      case env.SECRET_TOKEN:
        return new Response('Request allowed', { status: 200 });
      case env.SECRET_PAGES:
        return new Response('routed to pages', { status: 201 });
      default:
        return new Response('x-custom-token does not match, request not allowed', { status: 403 });
    }
  },
};

//token x-custom-token : 123
//token x-custom-token : pages
