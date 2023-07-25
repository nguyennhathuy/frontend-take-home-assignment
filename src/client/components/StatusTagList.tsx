import * as Tabs from '@radix-ui/react-tabs'

type StatusTagListProps = {
  targetStatus: string
  handleChangeStatusTag: (status: string) => void
}

export const StatusTagList = ({
  targetStatus,
  handleChangeStatusTag,
}: StatusTagListProps) => {
  return (
    <Tabs.Root
      defaultValue="all"
      orientation="vertical"
      onValueChange={(value) => {
        handleChangeStatusTag(value)
      }}
    >
      <Tabs.List aria-label="Filter your todo by status" className="flex gap-2">
        <Tabs.Trigger
          value="all"
          className={`${
            targetStatus === 'all' ? 'btn-active' : 'btn-default'
          } rounded-full px-5 py-2 font-sans`}
        >
          All
        </Tabs.Trigger>

        <Tabs.Trigger
          value="pending"
          className={`${
            targetStatus === 'pending' ? 'btn-active' : 'btn-default'
          } rounded-full px-5 py-2 font-sans`}
        >
          Pending
        </Tabs.Trigger>

        <Tabs.Trigger
          value="completed"
          className={`${
            targetStatus === 'completed' ? 'btn-active' : 'btn-default'
          } rounded-full px-5 py-2 font-sans`}
        >
          Completed
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}
