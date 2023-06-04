import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

export default function ToolTipTableCell(props) {
  const helperText = props.helperText

  const renderTooltip = props => (
    <Tooltip id="cell-tooltip" {...props}>
      {helperText}
    </Tooltip>
  )

  return (
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <td>{props.children}</td>
    </OverlayTrigger>
  )
}