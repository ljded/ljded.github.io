---
title: 全国大学生软件测试大赛-2025预选赛
description: 全国大学生软件测试大赛-2025预选赛
pubDate: 2025-11-02
date: 2025-11-01
published: 2025-11-02
draft: false
tags: [比赛, 全国大学生软件测试大赛]
category: 比赛
---

> [!TIP]
> 文件分享在百度网盘答案为本人和团队编写如二次分发请注明作者<br>
> https://pan.baidu.com/s/13vyaTra_NgNYfoy-xYUDZw?pwd=4emb <br>

> [!TIP]
> 大赛官网<br>
> http://www.mooctest.org/#/home/index

# 比赛时间

2025年11月1日14:00至17:00

# 比赛内容

测试百度地图下列功能 具体需求请下载题目查看
1. 公交路线查询
2. 路况信息
3. 地铁线路图

# 代码答案

```java
import org.apache.commons.io.FileUtils;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.io.File;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;


public class TestBaiDuMap {
    private WebDriver driver;

    @BeforeEach
    public void setup() {
        //提交最终代码脚本时，请将驱动路径换回官方路径"C:\\Users\\86153\\AppData\\Local\\Google\\Chrome\\Application\\chromedriver.exe"
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\86153\\AppData\\Local\\Google\\Chrome\\Application\\chromedriver.exe");
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--remote-allow-origins=*");
        driver = new ChromeDriver(chromeOptions);
        driver.get("https://map.baidu.com/");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
    }

    // test-code-start

    // 请在此处插入Selenium+JUnit5代码

    @FindBy(xpath = "//div[@data-title = '路线']")
    WebElement route;
    @FindBy(xpath = "//span[text() = '公交']/..")
    WebElement bus;

    void test_bus_public() {
        PageFactory.initElements(driver, this);
        Actions actions = new Actions(driver);
        actions.moveToElement(route).click().perform();
        actions.moveToElement(bus).click().perform();
    }

    @FindBy(xpath = "//input[@class = 'route-start-input']")
    WebElement busStar;
    @FindBy(xpath = "//input[@class = 'route-end-input']")
    WebElement busEnd;
    @FindBy(xpath = "//button[@id = 'search-button']")
    WebElement submit;

    @ParameterizedTest
    @CsvSource({
            "南京大学(鼓楼校区),新街口商业步行区,BaiDuMap_R001_001.png",
            "东南大学(四牌楼校区),先锋书店(五台山店),BaiDuMap_R001_002.png",
            "南京大学(鼓楼校区),先锋书店(五台山店),BaiDuMap_R001_003.png",
            "东南大学(四牌楼校区),新街口商业步行区,BaiDuMap_R001_004.png"
    })
    void test_BaiDuMap_R001(String star, String end, String screen) throws InterruptedException {
        test_bus_public();
        busStar.click();
        busStar.sendKeys(star + Keys.ENTER);
        busEnd.click();
        busEnd.sendKeys(end + Keys.ENTER);
        submit.click();
        Thread.sleep(10000);
        takeScreenshot(screen);
    }

    @FindBy(xpath = "//td[text() = '推荐路线']")
    WebElement recommend;
    @FindBy(xpath = "//td[text() = '时间短']")
    WebElement shortTime;
    @FindBy(xpath = "//td[text() = '少换乘']")
    WebElement lessTransfer;
    @FindBy(xpath = "//td[text() = '少步行']")
    WebElement walkLess;

    @ParameterizedTest
    @CsvSource({
            "南京大学(鼓楼校区),南京大学(仙林校区),BaiDuMap_R002_"
    })
    void test_BaiDuMap_R002(String star, String end, String screen) throws InterruptedException {
        test_bus_public();
        busStar.click();
        busStar.sendKeys(star + Keys.ENTER);
        busEnd.click();
        busEnd.sendKeys(end + Keys.ENTER);
        submit.click();
        Thread.sleep(10000);
        // 选择推荐路线
        recommend.click();
        Thread.sleep(2000);
        takeScreenshot(screen + "001.png");
        // 选择时间短
        shortTime.click();
        Thread.sleep(2000);
        takeScreenshot(screen + "002.png");
        // 选择少换乘
        lessTransfer.click();
        Thread.sleep(2000);
        takeScreenshot(screen + "003.png");
        // 选择少步行
        walkLess.click();
        Thread.sleep(500);
        takeScreenshot(screen + "004.png");
    }

    @ParameterizedTest
    @CsvSource({
            "玄武湖景区,先锋书店(五台山店),48路,BaiDuMap_R003_001.png"
    })
    void test_BaiDuMap_R003(String star, String end, String busRouteId, String screen) throws InterruptedException {
        test_bus_public();
        busStar.click();
        busStar.sendKeys(star + Keys.ENTER);
        busEnd.click();
        busEnd.sendKeys(end + Keys.ENTER);
        submit.click();
        Thread.sleep(5000);
        driver.findElement(By.xpath("(//a[text() = '" + star + "']/../..)//div[text() = '选为起点']")).click();
        Thread.sleep(2500);
        driver.findElement(By.xpath("//span[normalize-space(text()) = '" + busRouteId + "']/../../../../../../..")).click();
        Thread.sleep(1000);
        WebElement streetView = driver.findElement(By.xpath("(//span[normalize-space(text()) = '" + busRouteId + "']/../../../../../../..)//span[text() = '" + end + "']/../a"));
        streetView.click();
        Actions actions = new Actions(driver);
        actions.moveToElement(streetView).perform();
        Thread.sleep(1000);
        actions.click().perform();
        Thread.sleep(10000);
        takeScreenshot(screen);
    }

    @FindBy(xpath = "//a[@map-on-click = 'selectCity']")
    WebElement cityList;
    @FindBy(xpath = "//a[@name = '南京']")
    WebElement nanJing;

    void test_city_list_public() throws InterruptedException {
        PageFactory.initElements(driver, this);
        Actions actions = new Actions(driver);
        actions.moveToElement(cityList).click().perform();
        Thread.sleep(500);
        actions.moveToElement(nanJing).click().perform();
        Thread.sleep(2000);
    }

    @FindBy(xpath = "//i[text() = '路况']")
    WebElement roadConditions;
    @FindBy(xpath = "//span[text() = '实时路况']")
    WebElement realTimeTrafficConditions;
    @FindBy(xpath = "//span[@class = 'update']")
    WebElement update;

    @ParameterizedTest
    @CsvSource({
            "BaiDuMap_R004_001.png"
    })
    void test_BaiDuMap_R004(String screen) throws InterruptedException {
        test_city_list_public();
        roadConditions.click();
        Thread.sleep(1000);
        realTimeTrafficConditions.click();
        Thread.sleep(1000);
        update.click();
        Thread.sleep(5000);
        takeScreenshot(screen);
    }

    @FindBy(xpath = "//span[text() = '路况预测']")
    WebElement roadConditionPrediction;
    @FindBy(xpath = "//span[@id = 'week_trafficCtrl_0']")
    WebElement monday;
    @FindBy(xpath = "//span[@id = 'week_trafficCtrl_1']")
    WebElement tuesday;
    @FindBy(xpath = "//span[@id = 'week_trafficCtrl_2']")
    WebElement wednesday;
    @FindBy(xpath = "//span[@id = 'week_trafficCtrl_3']")
    WebElement thursday;
    @FindBy(xpath = "//span[@id = 'week_trafficCtrl_4']")
    WebElement friday;
    @FindBy(xpath = "//span[@id = 'week_trafficCtrl_5']")
    WebElement saturday;
    @FindBy(xpath = "//span[@id = 'week_trafficCtrl_6']")
    WebElement sunday;

    @ParameterizedTest
    @CsvSource({
            "BaiDuMap_R005_"
    })
    void test_BaiDuMap_R005(String screen) throws InterruptedException {
        test_city_list_public();
        roadConditions.click();
        Thread.sleep(1000);
        roadConditionPrediction.click();
        Thread.sleep(1000);
        // 周一
        monday.click();
        Thread.sleep(3000);
        takeScreenshot(screen + "001.png");
        // 周二
        tuesday.click();
        Thread.sleep(3000);
        takeScreenshot(screen + "002.png");
        // 周三
        wednesday.click();
        Thread.sleep(3000);
        takeScreenshot(screen + "003.png");
        // 周四
        thursday.click();
        Thread.sleep(3000);
        takeScreenshot(screen + "004.png");
        // 周五
        friday.click();
        Thread.sleep(3000);
        takeScreenshot(screen + "005.png");
        // 周六
        saturday.click();
        Thread.sleep(3000);
        takeScreenshot(screen + "006.png");
        // 周日
        sunday.click();
        Thread.sleep(3000);
        takeScreenshot(screen + "007.png");
    }

    @FindBy(xpath = "//div[@id ='bar_prev_trafficCtrl' ]")
    WebElement sliderStar;
    @FindBy(xpath = "//div[@id = 'bar_trafficCtrl']")
    WebElement slider;

    @ParameterizedTest
    @CsvSource({
            "BaiDuMap_R006_001.png"
    })
    void test_BaiDuMap_R006(String screen) throws InterruptedException {
        test_city_list_public();
        roadConditions.click();
        Thread.sleep(1000);
        roadConditionPrediction.click();
        Actions actions = new Actions(driver);
        actions.moveToElement(slider).clickAndHold().perform();
        Thread.sleep(500);
        actions.moveToElement(sliderStar).perform();
        Thread.sleep(500);
        actions.moveByOffset(155,0).release().perform();
        Thread.sleep(3000);
        takeScreenshot(screen);
    }

    @FindBy(xpath = "//i[text() = '地铁']")
    WebElement subway;
    @FindBy(xpath = "//input[@id = 'sub_start_input']")
    WebElement subwayStar;
    @FindBy(xpath = "//input[@id = 'sub_end_input']")
    WebElement subwayEnd;

    @ParameterizedTest
    @CsvSource({
            "珠江路,南京站,BaiDuMap_R007_001.png",
            "新街口,卡子门,BaiDuMap_R007_002.png",
            "珠江路,卡子门,BaiDuMap_R007_003.png",
            "新街口,南京站,BaiDuMap_R007_004.png"
    })
    void test_BaiDuMap_R007(String star, String end, String screen) throws InterruptedException {
        test_city_list_public();
        subway.click();
        Thread.sleep(3000);
        subwayStar.click();
        subwayStar.sendKeys(star + Keys.ENTER);
        subwayEnd.click();
        subwayEnd.sendKeys(end + Keys.ENTER);
        submit.click();
        Thread.sleep(5000);
        takeScreenshot(screen);
    }

    @ParameterizedTest
    @CsvSource({
            "大行宫,马群,BaiDuMap_R008_001.png"
    })
    void test_BaiDuMap_R008(String star, String end, String screen) throws InterruptedException {
        test_city_list_public();
        subway.click();
        Thread.sleep(3000);
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(By.xpath("//*[@name = '" + star + "']"))).click().perform();
        Thread.sleep(2000);
        actions.moveToElement(driver.findElement(By.xpath("//*[@name = '" + end + "']"))).click().perform();
        Thread.sleep(5000);
        takeScreenshot(screen);
    }

    // test-code-end

    @AfterEach
    public void teardown() {
        this.driver.quit();
    }

    private void takeScreenshot(String fileName) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("HHmmssddSSS");
        String timestamp = dateFormat.format(new Date());
        String timestampedFileName = timestamp + "_" + fileName;
        File screenshotsDir = new File("screenshots");
        if (!screenshotsDir.exists()) {
            screenshotsDir.mkdirs();
        }
        String screenshotFilePath = screenshotsDir.getAbsolutePath() + File.separator + timestampedFileName;
        File screenshotFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(screenshotFile, new File(screenshotFilePath));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```