let lessonTime = {
	1: { 'begin': '08:00', 'end': '09:35' },
	2: { 'begin': '09:50', 'end': '11:25' },
	3: { 'begin': '11:40', 'end': '13:15' },
	4: { 'begin': '14:00', 'end': '15:35' }
}

let breakTime = {
	'big': {
		1: { 'begin': '09:35', 'end': '09:50' },
		2: { 'begin': '11:25', 'end': '11:40' },
		3: { 'begin': '13:15', 'end': '14:00' },
	},
	'little': {
		1: { 'begin': '08:45', 'end': '08:50' },
		2: { 'begin': '10:35', 'end': '10:40' },
		3: { 'begin': '11:25', 'end': '11:30' },
		4: { 'begin': '14:45', 'end': '14:50' },
	},
}

let lessonTimeSeconds = {
	1: { 'begin': 0, 'end': 0 },
	2: { 'begin': 0, 'end': 0 },
	3: { 'begin': 0, 'end': 0 },
	4: { 'begin': 0, 'end': 0 }
};

let breakTimeSeconds = {
	'big': {
		1: { 'begin': 0, 'end': 0 },
		2: { 'begin': 0, 'end': 0 },
		3: { 'begin': 0, 'end': 0 },
	},
	'little': {
		1: { 'begin': 0, 'end': 0 },
		2: { 'begin': 0, 'end': 0 },
		3: { 'begin': 0, 'end': 0 },
		4: { 'begin': 0, 'end': 0 },
	},
}

function timeToSeconds(timeInput) {
	var a = timeInput.split(':')[0];
	var b = timeInput.split(':')[1];
	return ((a * 3600) + (b * 60));
}

for (let i = 1; i < 5; i++) {
	lessonTimeSeconds[i]['begin'] = timeToSeconds(lessonTime[i]['begin']);
	lessonTimeSeconds[i]['end'] = timeToSeconds(lessonTime[i]['end']);
}
console.log('Пары:', lessonTime);
console.log('Пары в секундах', lessonTimeSeconds);

for (let i = 1; i < 4; i++) {
	breakTimeSeconds['big'][i]['begin'] = timeToSeconds(breakTime['big'][i]['begin']);
	breakTimeSeconds['big'][i]['end'] = timeToSeconds(breakTime['big'][i]['end']);
}
for (let i = 1; i < 5; i++) {
	breakTimeSeconds['little'][i]['begin'] = timeToSeconds(breakTime['little'][i]['begin']);
	breakTimeSeconds['little'][i]['end'] = timeToSeconds(breakTime['little'][i]['end']);
}

console.log('Перерывы', breakTime);
console.log('Перерывы в секундах', breakTimeSeconds);

$(document).ready(function () {
	for (let i = 1; i < 5; i++) {
		$(`.time_${i}`).each(function () {
			$(this).children('.time__start').text(lessonTime[i]['begin']);
			$(this).children('.time__end').text(lessonTime[i]['end']);
		});
	}
});

// !==================================================================================
/*
$(document).ready(function () {
	var lessonStringTime = '';
	for (let i = 0; i < lessonTime['start'].length; i++) {
		// ! Начало пары
		lessonTimeHours = Math.floor(lessonTime['start'][i] / 3600);
		lessonTimeMinutes = (lessonTime['start'][i] % 3600) / 60;

		lessonStringTime = '';
		if (lessonTimeHours < 10) { lessonStringTime = lessonStringTime + '0' }
		lessonStringTime = lessonStringTime + `${lessonTimeHours}:`;

		if (lessonTimeMinutes < 10) { lessonStringTime = lessonStringTime + '0' }
		lessonStringTime = lessonStringTime + `${lessonTimeMinutes}`;

		$('.time_' + (i + 1)).children('.time__start').text(lessonStringTime);

		// ! Конец пары
		lessonTimeHours = Math.floor(lessonTime['end'][i] / 3600);
		lessonTimeMinutes = (lessonTime['end'][i] % 3600) / 60;

		lessonStringTime = '';
		if (lessonTimeHours < 10) { lessonStringTime = lessonStringTime + '0' }
		lessonStringTime = lessonStringTime + `${lessonTimeHours}:`;

		if (lessonTimeMinutes < 10) { lessonStringTime = lessonStringTime + '0' }
		lessonStringTime = lessonStringTime + `${lessonTimeMinutes}`;

		$('.time_' + (i + 1)).children('.time__end').text(lessonStringTime);
	}


	$('.time').each(function () {
		if ($(this).hasClass('time_1')) {
			$(this).children('.time__start').text('08:00');
			$(this).children('.time__end').text('09:35');
		}
		if ($(this).hasClass('time_2')) {
			$(this).children('.time__start').text('09:50');
			$(this).children('.time__end').text('11:25');
		}
		if ($(this).hasClass('time_3')) {
			$(this).children('.time__start').text('11:40');
			$(this).children('.time__end').text('13:15');
		}
		if ($(this).hasClass('time_4')) {
			$(this).children('.time__start').text('14:00');
			$(this).children('.time__end').text('15:35');
		}
	})


});
*/