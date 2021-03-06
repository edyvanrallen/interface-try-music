// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('createEvent', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('createEvent', async function() {
    await driver.get("http://127.0.0.1:5501/interface/pages/mural.html")
    await driver.manage().window().setRect({ width: 1050, height: 748 })
    await driver.findElement(By.css(".butt")).click()
    await driver.findElement(By.id("selection")).click()
    {
      const dropdown = await driver.findElement(By.id("selection"))
      await dropdown.findElement(By.xpath("//option[. = 'Rehearsal']")).click()
    }
    await driver.findElement(By.id("nameEv")).click()
    await driver.findElement(By.id("nameEv")).sendKeys("Rehearsal")
    await driver.findElement(By.id("dateEv")).click()
    await driver.findElement(By.id("dateEv")).sendKeys("0002-09-25")
    await driver.findElement(By.id("dateEv")).sendKeys("0020-09-25")
    await driver.findElement(By.id("dateEv")).sendKeys("0201-09-25")
    await driver.findElement(By.id("dateEv")).sendKeys("2010-09-25")
    await driver.findElement(By.id("timeEv")).click()
    await driver.findElement(By.id("timeEv")).sendKeys("03:01")
    await driver.findElement(By.id("timeEv")).sendKeys("03:10")
    await driver.findElement(By.id("placeEv")).click()
    await driver.findElement(By.id("placeEv")).sendKeys("Bogotá")
    await driver.findElement(By.id("desc")).click()
    await driver.findElement(By.id("desc")).sendKeys("Aidento doido")
    await driver.findElement(By.css("#modal > #modal-content #btn > #btn")).click()
  })
})
