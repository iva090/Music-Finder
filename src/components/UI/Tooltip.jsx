import { Portal, Tooltip } from '@skeletonlabs/skeleton-react'

export default function TooltipMarker(props) {
    return (
        <Tooltip positioning={{ placement: "top" }}>
            <Tooltip.Trigger>{props.text}</Tooltip.Trigger>
            <Portal>
            <Tooltip.Positioner>
                <Tooltip.Content className="card p-2 preset-filled-surface-950-50">
                <span>{props.Tooltip}</span>
                <Tooltip.Arrow className="[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-950-50)]">
                    <Tooltip.ArrowTip />
                </Tooltip.Arrow>
                </Tooltip.Content>
            </Tooltip.Positioner>
            </Portal>
        </Tooltip>
    );
}
