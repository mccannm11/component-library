import React from "react"
import { PageHeader } from "../layouts/PageHeader"
import { PageWithNavigationLayout } from "../layouts/PageWithNavigationLayout"
import { Header } from "../typography/Header"
import { Spacer } from "../utilities/Spacer"
import { Panel, PanelHeader } from "../surfaces/Panel"
import { LoremIpsum } from "../utilities/LoremIpsum"
import { TabOption, Tabs } from "../surfaces/Tabs"

const SurfacesPage = () => (
  <PageWithNavigationLayout>
    <PageHeader>Surfaces</PageHeader>
    <PanelSection />
    <Spacer height={1} />
    <TabsSection />
    <Spacer height={1} />
  </PageWithNavigationLayout>
)

const PanelSection = () => (
  <>
    <Header variant="5"> Panel</Header>
    <Spacer height={0.5} />
    <Panel maxWidth={256}>
      <LoremIpsum />
    </Panel>
    <Spacer height={2} />
    <Header variant="5">Panel with PanelHeader</Header>
    <Spacer height={0.5} />
    <Panel maxWidth={256}>
      <PanelHeader>Panel Header</PanelHeader>
      <LoremIpsum />
    </Panel>
  </>
)

const TabsSection = () => {
  const tabOptions: TabOption[] = [
    {
      title: "First",
      component: "First tab content"
    }
  ]

  return (
    <>
      <Header variant="5">Tabs</Header>
      <Tabs options={tabOptions} tabPosition="top" />
    </>
  )
}

export { SurfacesPage }
