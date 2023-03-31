const posts = [
    {
      name: "Siva",
      location: "Bengaluru",
      likes: 64,
      description: "Kick start your career",
      PostImage: "relative path from local",
      date: new Date(),
    },
    {
      name: "Neeraj",
      location: "Pune",
      likes: 30,
      description: "Sample Description",
      PostImage: "relative path from local",
      date: new Date(),
    },
    {
      name: "Rahul",
      location: "Hyderabad",
      likes: 30,
      description: "Sample Description for Post",
      PostImage: "relative path from local",
      date: new Date(),
    },
  ];
  
  export function getAllPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ result: posts });
      }, 1000);
    });
  }
  