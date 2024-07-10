// cra 설정사항을 덮어쓸 수 있는 craco package 설치
// 새로운 설정파일인 craco.config.js
module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            type: "javascript/auto",
            test: /\.mjs$/,
            include: /node_modules/,
          },
        ],
      },
    },
  },
};
