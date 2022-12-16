module.exports = {
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "http://51.38.130.146:8080/login",
      },
    ];
  },
};
