/************************************************************************************************************/

query {
  getPosts {
    id
    username
    body
    createdAt
  }
}

/************************************************************************************************************/

query {
  getPost(postId:"5f8c0025d8fde6b0443c5c40"){
    id
    body
    username
    createdAt
  }
}

/************************************************************************************************************/

mutation {
  register(registerInput: {
    username: "user"
    password: "123456"
    confirmPassword: "123456"
    email: "user@email.com"
  }) {
    id
    email
    token
    username
    createdAt
  }
}

/************************************************************************************************************/

mutation {
  login(username: "user", password: "123456"){
    id
    email
    token
    username
    createdAt
  }
}

/************************************************************************************************************/

mutation {
  createPost(body: "Post created from Playground!") {
    id
    body
    username
    createdAt
  }
}


{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOGM0MzI2OTlmOGZiM2VmMGM3NDRjZCIsImVtYWlsIjoidXNlckBlbWFpbC5jb20iLCJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE2MDMwMzE3NTMsImV4cCI6MTYwMzAzNTM1M30.k0UPFaBjUPigpkXD8YR8FJse2PBXzPYhNOMxHtJgBms"
}

/************************************************************************************************************/

mutation {
  deletePost(postId: "5f8c53829e204026e89db83f")
}

/************************************************************************************************************/

mutation {
  createComment(postId:"5f8c0025d8fde6b0443c5c40" body:"My first comment!"){
    id
    body
    username
    comments {
      id
      body
      username
      createdAt
    }
    likes{
      id
      username
      createdAt
    }
    createdAt
  }
}

/************************************************************************************************************/

mutation {
  deleteComment(postId:"5f8c0025d8fde6b0443c5c40", commentId:"5f8c92ae31231943f0e34639") {
    id
    body
    username
    comments {
      id
      body
      username
      createdAt
    }
    likes{
      id
      username
      createdAt
    }
    createdAt
  }
}

/************************************************************************************************************/

mutation {
  likePost(postId:"5f8c484dd8fde6b0443c5c41"){
    id
    body
    username
    comments {
      id
      body
      username
      createdAt
    }
    likes{
      id
      username
      createdAt
    }
    createdAt
  }
}

/************************************************************************************************************/

