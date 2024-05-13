<?php
use PHPUnit\Framework\TestCase;
use Facebook\WebDriver\WebDriverBy;
use Facebook\WebDriver\WebDriverExpectedCondition;

class ThanksTest extends TestCase
{
    protected $webDriver;

    public function setUp(): void
    {
        $this->webDriver = RemoteWebDriver::create('http://localhost:4444/wd/hub', [
            'platform' => 'LINUX',
            'browserName' => 'chrome',
        ]);
    }

    public function tearDown(): void
    {
        $this->webDriver->quit();
    }

    public function testOpenModalOnClick()
    {
        $this->webDriver->get('http://minttey3.beget.tech/');
        $openModalButton = $this->webDriver->findElement(WebDriverBy::id('open-modal'));
        $openModalButton->click();

        $modalBoxThanks = $this->webDriver->findElement(WebDriverBy::id('modal-box-thanks'));
        $this->assertTrue($modalBoxThanks->getAttribute('class') === 'open');
    }

    public function testCloseModalOnClick()
    {
        $this->webDriver->get('http://minttey3.beget.tech/');
        $closeModalButton = $this->webDriver->findElement(WebDriverBy::id('close_modal'));
        $closeModalButton->click();

        $modalBoxThanks = $this->webDriver->findElement(WebDriverBy::id('modal-box-thanks'));
        $this->assertTrue($modalBoxThanks->getAttribute('class') !== 'open');
    }

    public function testCloseModalOutsideClick()
    {
        $this->webDriver->get('http://minttey3.beget.tech/');
        // Эмулируем клик вне модального окна
        $body = $this->webDriver->findElement(WebDriverBy::tagName('body'));
        $body->click();

        $modalBoxThanks = $this->webDriver->findElement(WebDriverBy::id('modal-box-thanks'));
        $this->assertTrue($modalBoxThanks->getAttribute('class') !== 'open');
    }
}