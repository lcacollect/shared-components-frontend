export type HelpText = {
  title: string
  body: string
  buttonTexts?: string[]
}

type HelpTextObject = {
  [key: string]: HelpText[]
}

// Keys must match app routes
export default {
  components: [
    {
      title: 'Building Components',
      body: 'On this page all the building components are administrated. This is where you add your quantities and descriptions for all the building components in the building. Only the building component categories that are to be included in your selected scheme under "Settings" are available in the list.',
    },
    {
      title: 'Working with building components',
      body: `To add a building component, go to the relevant category and press the + button. This will add a new row in your table. Class and subclass are according to BIMtypecode and should be selected for all building components. Name should be filled out so it is relevant for all viewers. If you are not importing from a source the quantity is typed in in the "Quantity" field, and the appropriate unit is selected. In the description field the building components material composition should be described to the best of your ability. eg.

200mm Concrete element C30/37, reinforced with 120kg steel pr. m3
300mm glasswool insulation class 34
108mm Red brick

Or in case of non-layered component:

25mm alupex pipes.

When you are done filling out all the fields, press the save icon to save the row.

When the row is saved you will get an edit and delete icon at the end of the row. Use these to edit or delete rows from the project.`,
    },
    {
      title: 'Working with tasks',
      body: `Tasks are the main way of communicating with other project members on LCAcollect. Tasks on LCAcollect are connected to a "Building Component" or a "Class" or "Subclass". To start creating a task press the "checkmark icon" in the top left corner. Now you can select which item you want to create a task related to. When you have selected an item, you press the "checkmark icon" again. In the pop-up you can write a title and description for your task and assign it to a project member or group. When a new task is created it will have the status "Pending" as default. When you have assigned your task to someone press done and your task will be created.

To access the task again you press the task's icon in the "Building components" table, or you can access it from the Task tab, where an overview of all tasks is available in table format.

When you access the task again you will be able to add and reply to comments in the bottom of the task pop-up.`,
    },
  ],
  export: [
    {
      title: 'Export',
      body: 'From this page you can export your project to either CSV or LCAbyg JSON format. You select the desired format from the dropdown and press the "Export" button to create the file.',
    },
  ],
  members: [
    {
      title: 'Project Members',
      body: `On this page you can manage the project members and their relation to the project by assigning roles and groups.

Members or groups can be added by clicking the "+" sign and a group leader can be chosen once the member has been added to the project group.`,
    },
  ],
  projectHome: [
    {
      title: 'Project Home Page',
      body: 'On this page you can view statistics about your project. You can use it to get an overview of the project team and get a glimpse of where actions are needed to further advance the project.',
    },
  ],
  settings: [
    {
      title: 'Settings',
      body: `On this page you control the settings for your project. In the section "Project Information" you can assign a name and other general information to identify your project.

In the section Building Information you assign attributes to your project. Gross area is the area that your total embodied emissions will be divided between. The rest of the attributes in this section are there for searchability purposes.

In the section "Building Energy Use" you assign the values needed to calculate the emissions from the building's energy consumption. If you are using the tool for building regulations in Denmark this data should come from your energy frame calculation.

At the bottom you can see which stages according to EN 15978 and EN 15804 should be included depending on the LCA scheme you have chosen.`,
    },
  ],
  sources: [
    {
      title: 'Sources',
      body: `On this page you can import external sources into your project. In the sources table you can see all the sources that have been connected to the project. If you want to add a new source press the "+" sign above the table. The current version of LCAcollect only supports *.CSV files.

In the source interpretation table, you can see how LCAcollect interprets the data from a given source. If you wish to edit this, or have just added a new source, press the edit button for the given source. The pop-up will give you freedom to select which row represents what information on LCAcollect. You select which LCAcollect you want to map from the tabs in top of the pop-up, then select which row from the imported data you want to map to this E.g., a row in an imported source file could be named volume, and be selected to represent M3 on LCAcollect.`,
    },
  ],
  tasks: [
    {
      title: 'Tasks',
      body: 'On this page you can get a quick overview of all tasks on the project. If you hover over the table headers, you will be able to sort or add filters to the table. If you press the "chain-link" icon you will be taken to the item which the task has been connected to.',
    },
  ],
} as HelpTextObject
