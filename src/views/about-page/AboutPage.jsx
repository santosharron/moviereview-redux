import styles from './AboutPage.module.scss';

import React from 'react';
import { connect } from 'react-redux';
import { selectErrorText } from '../../selectors/error/ErrorSelector';
import ShowsAction from '../../stores/shows/ShowsAction';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import { Header, Message, Container } from 'semantic-ui-react';

const mapStateToProps = (state, ownProps) => ({
  isRequesting: selectRequesting(state, [ShowsAction.REQUEST_ERROR]),
  requestErrorText: selectErrorText(state, [ShowsAction.REQUEST_ERROR_FINISHED]),
});

class AboutPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(ShowsAction.requestError());
  }

  render() {
    const { isRequesting, requestErrorText } = this.props;

    return (
      <div className={styles.wrapper}>
        <Header as="h2">About</Header>
        <LoadingIndicator isActive={isRequesting}>
          <Container>
            <p>
              This page is only to show how to handle API errors on the page. You will also notice a popup indicator with the actual error text. Below
              we create a custom error message.
            </p>
          </Container>
          {requestErrorText && <Message info={true} header="Error" content="Sorry there was an error requesting this content." />}
        </LoadingIndicator>
      </div>
    );
  }
}

export { AboutPage as Unconnected };
export default connect(mapStateToProps)(AboutPage);
