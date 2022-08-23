<template>
  <div class="my-10px">
    <div class="p-20px mx-auto w-400px border bg-green-100 overflow-hidden">
      <b-dropdown
      id="dropdown-1"
      text="Dropdown Button"
      boundary="window"
      class="m-md-2"
      >
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </div>
</div>
</template>
