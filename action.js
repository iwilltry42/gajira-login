const Jira = require('./common/net/Jira')

module.exports = class {
  constructor ({ githubEvent, argv, config }) {
    this.Jira = new Jira({
      baseUrl: config.baseUrl,
      token: config.token,
      email: config.email,
      apiVersion: config.apiVersion
    })

    this.config = config
    this.argv = argv
    this.githubEvent = githubEvent
  }

  async execute () {

    console.log(`Logging in to Jira at ${this.Jira.baseUrl} (API-Version ${this.Jira.apiVersion})`)

    const myself = await this.Jira.getMyself()

    console.log(`Logged in as: ${myself.name}`)

    return this.config
  }
}
