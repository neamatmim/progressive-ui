import { ReactNode } from 'react';
type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;
type Props = Partial<{
  children: RenderCallback | ReactNode;
  render: RenderCallback;
}>;

const List = () => {
  const { children, render } = this.props;
  const renderProps = { show: this.state.show, toggle: this.toggle };
  if (render) {
    return render(renderProps);
  }
  return isFunction(children) ? children(renderProps) : null;
};

export default List;
