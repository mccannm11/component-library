import React, { FC, ReactNode } from "react"
import styled from "styled-components"

type TabPosition = "top" | "left" | "bottom" | "right"

export type TabOption = {
  title: string
  component: ReactNode
}

type TabsProps = {
  tabPosition: TabPosition
  options: TabOption[]
}

const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  max-width: 256px;
`

const StyledTabsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #ccc;
  padding: 8px;
`

const StyledTabsHeaderItem = styled.div``

const StyledTabsBody = styled.div`
  padding: 16px;
`

export const Tabs: FC<TabsProps> = () => {
  return (
    <StyledTabs>
      <StyledTabsHeader>
        <StyledTabsHeaderItem>Item 1</StyledTabsHeaderItem>
        <StyledTabsHeaderItem>Item 2</StyledTabsHeaderItem>
        <StyledTabsHeaderItem>Item 3</StyledTabsHeaderItem>
      </StyledTabsHeader>
      <StyledTabsBody>body content</StyledTabsBody>
    </StyledTabs>
  )
}
