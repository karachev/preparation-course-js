/*
В примере ниже подключены два скрипта small.js и big.js .
Если предположить, что small.js загружается гораздо быстрее, чем big.js –
какой выполнится первым?

Сначала big, потом small
<script src="big.js"></script>
<script src="small.js"></script>

А вот так?

small -> big
<script async src="big.js"></script>
<script async src="small.js"></script>

А так?

big -> small
<script defer src="big.js"></script>
<script defer src="small.js"></script>
*/
