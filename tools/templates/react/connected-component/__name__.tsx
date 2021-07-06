import styles from './__name__.module.scss';

import * as React from 'react';
import {connect} from 'react-redux';

interface IProps {}
interface IState {}
interface IRouteParams {}
interface IStateToProps {}

const mapStateToProps = (state: IStore, ownProps: IProps): IStateToProps => ({});

class __name__ extends React.Component<IProps & IStateToProps & ReduxProps<any, IRouteParams>, IState> {

  // public static defaultProps: Partial<IProps> = {};

  // public state: IState = {};

  public render(): JSX.Element {
    return (
      <div className={styles.wrapper}>
        __name__(sentenceCase)
      </div>
    );
  }

}

export { __name__ as Unconnected };
export default connect(mapStateToProps)(__name__);
