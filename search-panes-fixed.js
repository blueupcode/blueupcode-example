$(function() {
  // Initialize datatable
  $("#datatable-1").DataTable({
    responsive: true, // Reponsive support
    dom: `
      <'row'<'col-12'P>>
      <'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>
      <'row'<'col-12'tr>>
      <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>
    `,
    searchPanes: {
      layout: `columns-2`,
      cascadePanes: true,
      viewTotal: true
    },
    language: {
      searchPanes: {
        count: "{total} found",
        countFiltered: "{shown} / {total}"
      }
    }
  })

  $('.dtsp-searchPane:not(.dtsp-hidden)').last().hide();
})
