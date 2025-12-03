---
title: 全国大学生软件测试大赛-2025省赛
description: 全国大学生软件测试大赛-2025省赛
pubDate: 2025-12-03
date: 2025-11-15
published: 2025-12-03
draft: false
tags: [比赛, 全国大学生软件测试大赛]
category: 比赛
---

> [!TIP]
> 文件分享在百度网盘答案为本人和团队编写如二次分发请注明作者<br>
> https://pan.baidu.com/s/1RTJelDXu0Q7yAMtZmMmPRA?pwd=tqf2 <br>

> [!TIP]
> 大赛官网<br>
> http://www.mooctest.org/#/home/index

# 比赛时间

2025年11月15日14:00至17:00

# 比赛内容

测试顺丰网站下列功能 具体需求请下载题目查看
1. 运费时效查询
2. 服务网点查询
3. 收寄标准查询
4. 服务范围查询

# 代码答案
```java
import org.apache.commons.io.FileUtils;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
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
import java.util.List;


public class TestSF {
    private WebDriver driver;

    @BeforeEach
    public void setup() {
        //提交最终代码脚本时，请将驱动路径换回官方路径"C:\\Users\\86153\\AppData\\Local\\Google\\Chrome\\Application\\chromedriver.exe"
        System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\Google\\Chrome\\Application\\chromedriver.exe");
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--remote-allow-origins=*");
        driver = new ChromeDriver(chromeOptions);
        driver.get("https://www.sf-express.com/");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
    }

    // test-code-start

    @FindBy(xpath = "//a[text() = '服务支持']")
    WebElement support;
    @FindBy(xpath = "//li[contains(text(), '运费时效')]")
    WebElement shippingCost;

    void test_shippingCost_pub() throws InterruptedException {
        PageFactory.initElements(driver, this);
        support.click();
        Thread.sleep(1000);
        shippingCost.click();
    }

    @FindBy(xpath = "//div[@placeholder = '请选择始发地地区。例如：北京市']")
    WebElement star;
    @FindBy(xpath = "//input[@class = 'city-search']")
    WebElement input;
    @FindBy(xpath = "//div[@placeholder = '请选择目的地地区。例如：北京市']")
    WebElement end;
    @FindBy(xpath = "//button[contains(text(), '查询')]")
    WebElement query;
    @FindBy(xpath = "//span[contains(text(), '确定')]/..")
    WebElement timeOK;

    @ParameterizedTest
    @CsvSource({
            "广州市,黄埔区,黄埔东苑,南京市,鼓楼区,南京大学,SF_R001_001.png",
            "南京市,鼓楼区,南京大学,广州市,黄埔区,黄埔东苑,SF_R001_002.png"
    })
    void test_SF_R001(String form, String formDivision, String fromDetailed, String to, String toDivision, String toDetailed, String screen) throws InterruptedException {
        test_shippingCost_pub();
        star.click();
        input.sendKeys(form);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//div[text() = '" + "-" + formDivision + "']")).click();
        Thread.sleep(1000);
        List<WebElement> elements = driver.findElements(By.xpath("//input[@placeholder = '详细地址（选填）']"));
        elements.get(0).sendKeys(fromDetailed);
        end.click();
        input.sendKeys(to);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//div[text() = '" + "-" + toDivision + "']")).click();
        Thread.sleep(1000);
        elements.get(1).sendKeys(toDetailed);

        List<WebElement> elements1 = driver.findElements(By.xpath("//input[@type= 'tel']"));
        elements1.get(0).sendKeys("5");
        elements1.get(1).sendKeys("20");
        elements1.get(2).sendKeys("15");
        elements1.get(3).sendKeys("25");

        driver.findElement(By.xpath("//input[@class= 'el-input__inner']")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("//span[contains(text(), '16')]")).click();
        timeOK.click();
        query.click();

        Thread.sleep(5000);
        takeScreenshot(screen);
    }

    @FindBy(xpath = "//li[contains(text(), '港澳台') and @class = 'tab-item cursor-point']")
    WebElement GAT;
    @FindBy(xpath = "//span[contains(text(), '香港') and @class = 'card-name cursor-point']")
    WebElement HK;
    @FindBy(xpath = "//span[contains(text(), '九龙城区') and @class = 'card-name cursor-point']")
    WebElement JL;
    @FindBy(xpath = "//span[contains(text(), '南京市') and @class = 'card-name cursor-point']")
    WebElement NJ;
    @FindBy(xpath = "//span[contains(text(), '鼓楼区') and @class = 'card-name cursor-point']")
    WebElement GL;
    @FindBy(xpath = "//span[contains(text(), '此刻')]")
    WebElement timeNow;

    @Test
    void test_SF_R002() throws InterruptedException {
        test_shippingCost_pub();
        star.click();
        Thread.sleep(1000);
        GAT.click();
        Thread.sleep(1000);
        HK.click();
        Thread.sleep(1000);
        JL.click();
        Thread.sleep(1000);
        end.click();
        Thread.sleep(1000);
        NJ.click();
        Thread.sleep(1000);
        GL.click();

        List<WebElement> elements1 = driver.findElements(By.xpath("//input[@type= 'tel']"));
        elements1.get(0).sendKeys("5");
        elements1.get(1).sendKeys("20");
        elements1.get(2).sendKeys("15");
        elements1.get(3).sendKeys("25");

        driver.findElement(By.xpath("//input[@class= 'el-input__inner']")).click();
        timeNow.click();
        query.click();

        Thread.sleep(5000);
        takeScreenshot("SF_R002_001.png");
    }

    @Test
    void test_SF_R003() throws InterruptedException {
        test_shippingCost_pub();
        star.click();
        Thread.sleep(1000);
        GAT.click();
        Thread.sleep(1000);
        HK.click();
        Thread.sleep(1000);
        JL.click();
        Thread.sleep(1000);
        end.click();
        Thread.sleep(1000);
        NJ.click();
        Thread.sleep(1000);
        GL.click();

        List<WebElement> elements1 = driver.findElements(By.xpath("//input[@type= 'tel']"));
        elements1.get(0).clear();
        elements1.get(0).sendKeys("100");

        driver.findElement(By.xpath("//input[@class= 'el-input__inner']")).click();
        List<WebElement> elements = driver.findElements(By.xpath("//input[@class= 'el-input__inner']"));
        elements.get(1).sendKeys("2025-11-17");
        Thread.sleep(1000);
        elements.get(2).click();
        elements.get(2).clear();
        Thread.sleep(1000);
        elements.get(2).sendKeys("15:00:00" + Keys.ENTER);
        timeOK.click();
        query.click();

        Thread.sleep(5000);
        takeScreenshot("SF_R003_001.png");
    }

    @FindBy(xpath = "//li[contains(text() , '大件（20kg+）')]")
    WebElement largeItem;

    @ParameterizedTest
    @CsvSource({
            "19,5,8,6,SF_R004_001.png",
            "20,5,8,6,SF_R004_002.png",
            "19,100,80,90,SF_R004_003.png",
            "20,100,80,90,SF_R004_004.png"
    })
    void test_SF_R004(String weight, String length, String width, String height, String screen) throws InterruptedException {
        test_shippingCost_pub();
        star.click();
        Thread.sleep(1000);
        GAT.click();
        Thread.sleep(1000);
        HK.click();
        Thread.sleep(1000);
        JL.click();
        Thread.sleep(1000);
        end.click();
        Thread.sleep(1000);
        NJ.click();
        Thread.sleep(1000);
        GL.click();

        List<WebElement> elements1 = driver.findElements(By.xpath("//input[@type= 'tel']"));
        elements1.get(0).clear();
        elements1.get(0).sendKeys(weight);
        elements1.get(1).sendKeys(length);
        elements1.get(2).sendKeys(width);
        elements1.get(3).sendKeys(height);

        driver.findElement(By.xpath("//input[@class= 'el-input__inner']")).click();
        List<WebElement> elements = driver.findElements(By.xpath("//input[@class= 'el-input__inner']"));
        elements.get(1).clear();
        elements.get(1).sendKeys("2025-11-18");
        Thread.sleep(1000);
        elements.get(2).click();
        elements.get(2).clear();
        Thread.sleep(1000);
        elements.get(2).sendKeys("08:00:00" + Keys.ENTER);
        timeOK.click();
        query.click();
        Thread.sleep(5000);
        largeItem.click();

        Thread.sleep(3000);
        takeScreenshot(screen);
    }

    @Test
    void test_SF_R005() throws InterruptedException {
        test_shippingCost_pub();
        String index = driver.getWindowHandle();
        driver.findElement(By.xpath("//span[text() = '保价']/..")).click();
        Thread.sleep(5000);
        driver.getWindowHandles().forEach(handle -> {
            if (!handle.equals(index)) {
                driver.switchTo().window(handle);
            }
        });
        takeScreenshot("SF_R005_001.png");
        driver.close();
        driver.switchTo().window(index);


        driver.findElement(By.xpath("//span[text() = '代收货款']/..")).click();
        Thread.sleep(5000);
        driver.getWindowHandles().forEach(handle -> {
            if (!handle.equals(index)) {
                driver.switchTo().window(handle);
            }
        });
        takeScreenshot("SF_R005_002.png");
        driver.close();
        driver.switchTo().window(index);


        driver.findElement(By.xpath("//span[text() = '签单返还']/..")).click();
        Thread.sleep(5000);
        driver.getWindowHandles().forEach(handle -> {
            if (!handle.equals(index)) {
                driver.switchTo().window(handle);
            }
        });
        takeScreenshot("SF_R005_003.png");
        driver.close();
        driver.switchTo().window(index);


        driver.findElement(By.xpath("//span[text() = '包装服务']/..")).click();
        Thread.sleep(5000);
        driver.getWindowHandles().forEach(handle -> {
            if (!handle.equals(index)) {
                driver.switchTo().window(handle);
            }
        });
        takeScreenshot("SF_R005_004.png");
    }

    //选择寄售件区域
    @FindBy(xpath = "//p[contains(text() , '服务网点')]")
    WebElement serviceOutlet;//服务网点

    void test_sendingAndReceiving_pub() throws InterruptedException {
        PageFactory.initElements(driver, this);
        support.click();
        Thread.sleep(1000);
        serviceOutlet.click();
    }

    //R006
    @FindBy(xpath = "//input[@placeholder='选择收寄件区域']")
    WebElement selectmainlandArea;//选择收寄件区域
    @FindBy(xpath = "//input[@id= 'range-key-word']")
    WebElement key;
    @FindBy(xpath = "//span[contains(text(), '上海市') and @class = 'card-name cursor-point']")
    WebElement SH;
    @FindBy(xpath = "//span[contains(text(), '黄浦区') and @class = 'card-name cursor-point']")
    WebElement HP;
    @FindBy(xpath = "//div[@title = '拖动缩放']")
    WebElement mapScale;
    @FindBy(xpath = "//div[@class= 'BMap_zlCity']")
    WebElement city;

    @Test
    void test_SF_R006() throws InterruptedException {
        test_sendingAndReceiving_pub();
        selectmainlandArea.click();
        Thread.sleep(1000);
        SH.click();
        Thread.sleep(1000);
        HP.click();
        key.click();
        Thread.sleep(1000);
        key.sendKeys("兴业太古汇");
        Thread.sleep(1000);
        driver.findElement(By.xpath("//span[text() = '兴业太古汇']/..")).click();
        query.click();
        Thread.sleep(5000);
        driver.findElement(By.xpath("//span[contains(@style, 'z-index: 11752478;') and @class = 'BMap_Marker BMap_noprint']")).click();
        Actions actions = new Actions(driver);
        actions.moveToElement(mapScale).perform();
        actions.moveToElement(city).click().perform();
        Thread.sleep(5000);
        takeScreenshot("SF_R006_001.png");
    }

    @FindBy(xpath = "//div[@title = '放大一级']")
    WebElement max;

    @ParameterizedTest
    @CsvSource({
            "广州市,天河区,天河城,13372532,SF_R007_001.png",
            "深圳市,福田区,天虹商场,13489378,SF_R007_002.png",
            "南京市,玄武区,新世界百货,11588560,SF_R007_003.png",
            "杭州市,西湖区,西城广场,11942984,SF_R007_004.png"
    })
    void test_SF_R007(String city, String district, String position, String shop, String screen) throws InterruptedException {
        test_sendingAndReceiving_pub();
        selectmainlandArea.click();
        input.click();
        input.sendKeys(city);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//div[text() = '" + "-" + district + "']")).click();
        Thread.sleep(1000);
        key.click();
        key.sendKeys(position);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//span[text() = '" + position + "']/..")).click();
        Thread.sleep(1000);
        query.click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//span[contains(@style, 'z-index: " + shop + ";') and @class = 'BMap_Marker BMap_noprint']")).click();
        Actions actions = new Actions(driver);
        actions.moveToElement(mapScale).clickAndHold().perform();
        actions.moveToElement(max).release().perform();
        Thread.sleep(5000);
        takeScreenshot(screen);
    }


    //R008
    @FindBy(xpath = "//li[contains(text(), '收寄标准')]")
    WebElement Standards;//寄收标准

    void test_standards_pub() throws InterruptedException {
        PageFactory.initElements(driver, this);
        support.click();
        Thread.sleep(1000);
        Standards.click();
    }

    @FindBy(xpath = "//input[@placeholder='请选择始发地国家/地区名称']")
    WebElement placeOfOrigin;
    @FindBy(xpath = "//input[@placeholder='请选择目的地国家/地区名称']")
    WebElement toOrigin;
    @FindBy(xpath = "//input[@placeholder = '请输入托寄物品名称，例如：电池']")
    WebElement inp;
    @FindBy(xpath = "//li[contains(text(), '省/直辖市')]")
    WebElement Sheng;
    @FindBy(xpath = "//span[contains(text(), '广东省') and @class = 'card-name cursor-point']")
    WebElement GD;
    @FindBy(xpath = "//span[contains(text(), '深圳市') and @class = 'card-name cursor-point']")
    WebElement SZ;
    @FindBy(xpath = "//span[contains(text(), '光明区') and @class = 'card-name cursor-point']")
    WebElement GM;
    @FindBy(xpath = "//span[contains(text(), '江苏省') and @class = 'card-name cursor-point']")
    WebElement JS;

    @ParameterizedTest
    @CsvSource({
            "电子,琴,SF_R008_001.png",
            "电脑,笔记本,SF_R008_002.png",
    })
    void test_SF_R008(String item, String name, String screen) throws InterruptedException {
        test_standards_pub();
        placeOfOrigin.click();
        Thread.sleep(1000);
        Sheng.click();
        GD.click();
        SZ.click();
        GM.click();
        toOrigin.click();
        Thread.sleep(1000);
        Sheng.click();
        JS.click();
        NJ.click();
        GL.click();
        inp.click();
        inp.sendKeys(item);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//div[text() = '" + name + "']/..")).click();
        query.click();
        Thread.sleep(5000);
        takeScreenshot(screen);
    }


    @FindBy(xpath = "//span[contains(text(), '南山区') and @class = 'card-name cursor-point']")
    WebElement NS;
    @FindBy(xpath = "//span[contains(text(), '湾仔区') and @class = 'card-name cursor-point']")
    WebElement WZ;
    @FindBy(xpath = "//span[contains(text(), '铜锣湾') and @class = 'card-name cursor-point']")
    WebElement TLW;

    @Test
    void test_SF_R009() throws InterruptedException {
        test_standards_pub();
        Thread.sleep(1000);
        placeOfOrigin.click();
        Thread.sleep(1000);
        SZ.click();
        Thread.sleep(1000);
        NS.click();
        Thread.sleep(1000);
        toOrigin.click();
        Thread.sleep(1000);
        GAT.click();
        Thread.sleep(1000);
        HK.click();
        Thread.sleep(1000);
        WZ.click();
        Thread.sleep(1000);
        TLW.click();
        Thread.sleep(1000);

        List<WebElement> elements = driver.findElements(By.xpath("//div[@class = 'select-id']"));
        elements.get(0).click();
        driver.findElement(By.xpath("//div[contains(text() , '个人')]")).click();
        elements.get(1).click();
        List<WebElement> elements1 = driver.findElements(By.xpath("//div[contains(text() , '公司')]"));
        elements1.get(1).click();

        inp.clear();
        inp.sendKeys("猫咪");
        query.click();
        Thread.sleep(5000);
        takeScreenshot("SF_R009_001.png");

        inp.clear();
        inp.sendKeys("硫酸");
        query.click();
        Thread.sleep(5000);
        takeScreenshot("SF_R009_002.png");

        inp.clear();
        inp.sendKeys("现金");
        query.click();
        Thread.sleep(5000);
        takeScreenshot("SF_R009_003.png");

        inp.clear();
        inp.sendKeys("古董");
        query.click();
        Thread.sleep(5000);
        takeScreenshot("SF_R009_004.png");

    }


    @FindBy(xpath = "//li[contains(text(), '服务范围')]")
    WebElement service;//寄收标准

    void test_service_pub() throws InterruptedException {
        PageFactory.initElements(driver, this);
        support.click();
        Thread.sleep(1000);
        service.click();
    }

    @FindBy(xpath = "//input[@placeholder='选择收寄件区域']")
    WebElement inputCity;
    @FindBy(xpath = "//input[@placeholder='选择乡/镇/街道，查询结果更准确']")
    WebElement inputPosition;

    @ParameterizedTest
    @CsvSource({
            "广东省,广州市,番禺区,null,SF_R010_001.png",
            "广东省,广州市,番禺区,大石街道,SF_R010_002.png",
            "新疆维吾尔自治区,喀什地区,伽师县,null,SF_R010_003.png",
            "新疆维吾尔自治区,喀什地区,伽师县,米夏乡,SF_R010_004.png",
    })
    void test_SF_R010(String province, String city, String district, String position, String screen) throws InterruptedException {
        test_service_pub();
        inputCity.click();
        Thread.sleep(1000);
        input.click();
        input.sendKeys(province);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//div[text() = '" + "-" + city + "-" + district + "']/..")).click();
        Thread.sleep(1000);
        if (!position.equals("null")) {
            inputPosition.click();
            Thread.sleep(1000);
            driver.findElement(By.xpath("//li[text() = '" + position + "']/..")).click();
            Thread.sleep(1000);
        }
        query.click();
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