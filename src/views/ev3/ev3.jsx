const injectIntl = require('react-intl').injectIntl;
const intlShape = require('react-intl').intlShape;
const FormattedMessage = require('react-intl').FormattedMessage;
const React = require('react');


const Page = require('../../components/page/www/page.jsx');
const render = require('../../lib/render.jsx');

const FlexRow = require('../../components/flex-row/flex-row.jsx');

const OSChooser = require('../../components/os-chooser/os-chooser.jsx');

const ExtensionLanding = require('../../components/extension-landing/extension-landing.jsx');
const ExtensionHeader = require('../../components/extension-landing/extension-header.jsx');
const ExtensionRequirements = require('../../components/extension-landing/extension-requirements.jsx');
const ExtensionSection = require('../../components/extension-landing/extension-section.jsx');
const InstallScratchLink = require('../../components/extension-landing/install-scratch-link.jsx');
const TipBox = require('../../components/extension-landing/tip-box.jsx');
const ProjectCard = require('../../components/extension-landing/project-card.jsx');

const Steps = require('../../components/steps/steps.jsx');
const Step = require('../../components/steps/step.jsx');

const OS_ENUM = require('../../components/extension-landing/os-enum.js');

require('../../components/extension-landing/extension-landing.scss');
require('./ev3.scss');

class EV3 extends ExtensionLanding {
    render () {
        return (
            <div className="extension-landing ev3">
                <ExtensionHeader
                    renderCopy={
                        <FlexRow className="column extension-copy">
                            <h1><img
                                alt=""
                                src="/images/ev3/ev3.svg"
                            />LEGO MINDSTORMS EV3</h1>
                            <FormattedMessage
                                id="ev3.headerText"
                                values={{
                                    ev3Link: (
                                        <a
                                            href="https://education.lego.com/en-us/middle-school/intro/mindstorms-ev3"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                                    LEGO MINDSTORMS Education EV3
                                        </a>
                                    )
                                }}
                            />
                        </FlexRow>
                    }
                    renderImage={<img
                        alt={this.props.intl.formatMessage({id: 'ev3.imgAltEv3Illustration'})}
                        src="/images/ev3/ev3-illustration.png"
                    />}
                    renderRequirements={
                        <ExtensionRequirements>
                            <span>
                                <img
                                    alt=""
                                    src="/svgs/extensions/windows.svg"
                                />
                                            Windows 10 version 1709+
                            </span>
                            <span>
                                <img
                                    alt=""
                                    src="/svgs/extensions/mac.svg"
                                />
                                            macOS 10.13+
                            </span>
                            <span>
                                <img src="/svgs/extensions/bluetooth.svg" />
                                            Bluetooth
                            </span>
                            <span>
                                <img
                                    alt=""
                                    src="/svgs/extensions/scratch-link.svg"
                                />
                                            Scratch Link
                            </span>
                        </ExtensionRequirements>
                    }
                />
                <OSChooser
                    currentOS={this.state.OS}
                    handleSetOS={this.onSetOS}
                />
                <InstallScratchLink
                    currentOS={this.state.OS}
                />
                <ExtensionSection className="getting-started">
                    <h2><FormattedMessage id="ev3.gettingStarted" /></h2>
                    <FlexRow className="column getting-started-section">
                        <h3><FormattedMessage id="ev3.connectingEV3" /></h3>
                        <Steps>
                            <Step number={1}>
                                <div className="step-image">
                                    <img
                                        alt=""
                                        src="/images/ev3/ev3-connect-1.png"
                                    />
                                </div>
                                <p><FormattedMessage id="ev3.turnOnEV3" /></p>
                            </Step>
                            <Step number={2}>
                                <div className="step-image">
                                    <img
                                        alt=""
                                        className="screenshot"
                                        src="/images/ev3/ev3-connect-2.png"
                                    />
                                </div>
                                <p>
                                    <FormattedMessage
                                        id="ev3.useScratch3"
                                        values={{
                                            scratch3Link: (
                                                <a
                                                    href="https://beta.scratch.mit.edu/"
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                >
                                                            Scratch 3.0
                                                </a>
                                            )
                                        }}
                                    />
                                </p>
                            </Step>
                            <Step number={3}>
                                <div className="step-image">
                                    <img
                                        alt={this.props.intl.formatMessage({id: 'extensionInstallation.addExtension'})}
                                        className="screenshot"
                                        src="/images/ev3/ev3-connect-3.png"
                                    />
                                </div>
                                <p><FormattedMessage id="ev3.addExtension" /></p>
                            </Step>
                        </Steps>
                        <TipBox title={this.props.intl.formatMessage({id: 'ev3.firstTimeConnecting'})}>
                            <p><FormattedMessage id="ev3.pairingDescription" /></p>
                            <Steps>
                                <Step>
                                    <div className="step-image">
                                        <img
                                            alt={this.props.intl.formatMessage({id: 'ev3.imgAltAcceptConnection'})}
                                            src="/images/ev3/ev3-accept-connection.png"
                                        />
                                    </div>
                                    <p><FormattedMessage id="ev3.acceptConnection" /></p>
                                </Step>
                                <Step>
                                    <div className="step-image">
                                        <img
                                            alt={this.props.intl.formatMessage({id: 'ev3.imgAltAcceptPasscode'})}
                                            src="/images/ev3/ev3-pin.png"
                                        />
                                    </div>
                                    <p><FormattedMessage id="ev3.acceptPasscode" /></p>
                                </Step>
                                <Step>
                                    <div className="step-image">
                                        <img
                                            alt={this.props.intl.formatMessage({id: `ev3.imgAlt${
                                                this.state.OS === OS_ENUM.WINDOWS ?
                                                    'WaitForWindows' :
                                                    'EnterPasscodeMac'
                                            }`})}
                                            className="screenshot"
                                            src={`/images/ev3/${
                                                this.state.OS === OS_ENUM.WINDOWS ?
                                                    'win-device-ready.png' :
                                                    'mac-enter-passcode.png'
                                            }`}
                                        />
                                    </div>
                                    <p>
                                        {this.state.OS === OS_ENUM.WINDOWS ?
                                            <FormattedMessage id="ev3.windowsFinalizePairing" /> :
                                            <FormattedMessage id="ev3.macosFinalizePairing" />
                                        }
                                    </p>
                                </Step>
                            </Steps>
                        </TipBox>
                    </FlexRow>
                </ExtensionSection>
                <ExtensionSection className="blue things-to-try">
                    <h2><FormattedMessage id="ev3.thingsToTry" /></h2>
                    <h3><FormattedMessage id="ev3.makeMotorMove" /></h3>
                    <Steps>
                        <Step
                            compact
                            number={1}
                        >
                            <span className="step-description">
                                <FormattedMessage
                                    id="ev3.plugMotorIn"
                                    values={{
                                        portA: (
                                            <strong><FormattedMessage id="ev3.portA" /></strong>
                                        )
                                    }}
                                />
                            </span>
                            <div className="step-image">
                                <img
                                    alt={this.props.intl.formatMessage({id: 'ev3.imgAltPlugInMotor'})}
                                    src="/images/ev3/ev3-motor-port-a.png"
                                />
                            </div>
                        </Step>
                        <Step
                            compact
                            number={2}
                        >
                            <span className="step-description">
                                <FormattedMessage
                                    id="ev3.clickMotorBlock"
                                    values={{
                                        motorBlockText: (
                                            <strong><FormattedMessage id="ev3.motorBlockText" /></strong>
                                        )
                                    }}
                                />
                            </span>
                            <div className="step-image">
                                <img
                                    alt=""
                                    src="/images/ev3/motor-turn-block.png"
                                />
                            </div>
                        </Step>
                    </Steps>
                    <hr />
                    <h3><FormattedMessage id="ev3.starterProjects" /></h3>
                    <Steps>
                        <ProjectCard
                            cardUrl="https://beta.scratch.mit.edu/#239075992"
                            description={this.props.intl.formatMessage({id: 'ev3.waveHelloDescription'})}
                            imageAlt={this.props.intl.formatMessage({id: 'ev3.imgAltWaveHello'})}
                            imageSrc="/images/ev3/starter-wave-hello.png"
                            title={this.props.intl.formatMessage({id: 'ev3.waveHelloTitle'})}
                        />
                        <ProjectCard
                            cardUrl="https://beta.scratch.mit.edu/#239076020"
                            description={this.props.intl.formatMessage({id: 'ev3.distanceInstrumentDescription'})}
                            imageAlt={this.props.intl.formatMessage({id: 'ev3.imgAltDistanceInstrument'})}
                            imageSrc="/images/ev3/starter-distance-instrument.png"
                            title={this.props.intl.formatMessage({id: 'ev3.distanceInstrumentTitle'})}
                        />
                        <ProjectCard
                            cardUrl="https://beta.scratch.mit.edu/#239076044"
                            description={this.props.intl.formatMessage({id: 'ev3.spaceTacosDescription'})}
                            imageAlt={this.props.intl.formatMessage({id: 'ev3.imgAltSpaceTacos'})}
                            imageSrc="/images/ev3/starter-flying-game.png"
                            title={this.props.intl.formatMessage({id: 'ev3.spaceTacosTitle'})}
                        />
                    </Steps>
                </ExtensionSection>
                <ExtensionSection className="faq">
                    <h2><FormattedMessage id="ev3.troubleshootingTitle" /></h2>
                    <h3 className="faq-title"><FormattedMessage id="ev3.checkOSVersionTitle" /></h3>
                    <p>
                        <FormattedMessage
                            id="ev3.checkOSVersionText"
                            values={{
                                winOSVersionLink: (
                                    <a
                                        href="https://support.microsoft.com/en-us/help/13443/windows-which-operating-system"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <FormattedMessage id="ev3.winOSVersionLinkText" />
                                    </a>
                                ),
                                macOSVersionLink: (
                                    <a
                                        href="https://support.apple.com/en-us/HT201260"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <FormattedMessage id="ev3.macOSVersionLinkText" />
                                    </a>
                                )
                            }}
                        />
                    </p>
                    <h3 className="faq-title"><FormattedMessage id="ev3.makeSurePairedTitle" /></h3>
                    <p>
                        <FormattedMessage
                            id="ev3.makeSurePairedText"
                            values={{
                                pairingInstructionLink: (
                                    <a
                                        href="https://www.lego.com/en-us/service/help/products/themes-sets/mindstorms/connecting-your-lego-mindstorms-ev3-to-bluetooth-408100000007886"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <FormattedMessage id="ev3.pairingInstructionText" />
                                    </a>
                                )
                            }}
                        />
                    </p>
                    <h3 className="faq-title"><FormattedMessage id="ev3.reconnectTitle" /></h3>
                    <p>
                        <FormattedMessage id="ev3.reconnectText" />
                    </p>
                    <h3 className="faq-title"><FormattedMessage id="ev3.closeScratchCopiesTitle" /></h3>
                    <p>
                        <FormattedMessage id="ev3.closeScratchCopiesText" />
                    </p>
                    <h3 className="faq-title"><FormattedMessage id="ev3.otherComputerConnectedTitle" /></h3>
                    <p>
                        <FormattedMessage id="ev3.otherComputerConnectedText" />
                    </p>
                    <h3 className="faq-title"><FormattedMessage id="ev3.updateFirmwareTitle" /></h3>
                    <p>
                        <FormattedMessage
                            id="ev3.updateFirmwareText"
                            values={{
                                firmwareUpdateLink: (
                                    <a
                                        href="https://education.lego.com/en-us/support/mindstorms-ev3/firmware-update"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <FormattedMessage id="ev3.firmwareUpdateText" />
                                    </a>
                                )
                            }}
                        />
                    </p>
                </ExtensionSection>
            </div>
        );
    }
}

EV3.propTypes = {
    intl: intlShape.isRequired
};

const WrappedEV3 = injectIntl(EV3);

render(<Page><WrappedEV3 /></Page>, document.getElementById('app'));
