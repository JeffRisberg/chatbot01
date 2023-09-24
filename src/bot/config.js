import {createChatBotMessage} from 'react-chatbot-kit';

import LearningOptions from "../components/LearningOptions/LearningOptions";
import LinkList from "../components/LinkList/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "FrontEnd Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "nlpLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to NLP",
            url:
              "https://towardsdatascience.com/a-gentle-introduction-to-natural-language-processing-e716ed3c0863/",
            id: 1,
          },
          {
            text: "HuggingFace course",
            url:
              "https://huggingface.co/learn/nlp-course/chapter1/1",
            id: 2,
          }
        ],
      },
    },
  ],
};

export default config;
