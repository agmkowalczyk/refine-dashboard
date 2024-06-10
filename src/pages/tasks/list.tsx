import {
  KanbanBoardContainer,
  KanbanBoard,
} from '@/components/tasks/kanban/board'
import KanbanColumn from '@/components/tasks/kanban/column'
import KanbanItem from '@/components/tasks/kanban/item'
import { TASKS_QUERY, TASK_STAGES_SELECT_QUERY } from '@/graphql/queries'
import { TaskStage } from '@/graphql/schema.types'
import { useList } from '@refinedev/core'
import React from 'react'

const List = () => {
  const { data: stages, isLoading: isLoadingStages } = useList({
    resource: 'taskStages',
    filters: [
      {
        field: 'title',
        operator: 'in',
        value: ['TODO', 'IN PROGRESS', 'IN REVIEW', 'DONE'],
      },
    ],
    sorters: [
      {
        field: 'createdAt',
        order: 'asc',
      },
    ],
    meta: {
      gqlQuery: TASK_STAGES_SELECT_QUERY,
    },
  })

  const { data: tasks, isLoading: isLoadingTasks } = useList({
    resource: 'tasks',
    sorters: [
      {
        field: 'dueDate',
        order: 'asc',
      },
    ],
    queryOptions: {
      enabled: !!stages,
    },
    pagination: {
      mode: 'off',
    },
    meta: {
      gqlQuery: TASKS_QUERY,
    },
  })

  const taskStages = React.useMemo(() => {
    if (!tasks?.data || !!stages?.data) {
      return {
        unassignedStage: [],
        stages: [],
      }
    }
    const unassignedStage = tasks.data.filter((task) => task.stageId === null)
    const grouped: TaskStage[] = stages?.data.map((stage) => ({
      ...stage,
      tasks: tasks.data.filter((task) => task.stageId.tiString() === stage.id),
    }))
    return {
      unassignedStage,
      columns: grouped,
    }
  }, [stages, tasks])

  const handleAddCard = (args: { stageId: string }) => {}

  return (
    <>
      <KanbanBoardContainer>
        <KanbanBoard>
          <KanbanColumn
            id='unassigned'
            title='unassigned'
            count={taskStages.unassignedStage.length || 0}
            onAddClick={() => handleAddCard({ stageId: 'unassigned' })}
          >
            <KanbanItem></KanbanItem>
          </KanbanColumn>
          <KanbanColumn></KanbanColumn>
        </KanbanBoard>
      </KanbanBoardContainer>
    </>
  )
}

export default List
