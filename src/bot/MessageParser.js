class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.handleHello();
    }

    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList();
    }
  }
}

export default MessageParser;
