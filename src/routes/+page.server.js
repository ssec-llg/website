import { env } from '$env/dynamic/private';

/**
 * Cache physician schedules response for 1h
 * @type {number}
 */
const cache_timeout = 3_600_000;

/** @type {Promise<PhysicianSchedule> =} */
let schedules;

/** @type {number =} */
let last_requested_at;

/**
 * Fetch physician schedules from our custom API
 * @returns {Promise<PhysicianSchedule>}
 */
async function get_physician_schedules() {
	if (!schedules || !last_requested_at || Date.now() - last_requested_at >= cache_timeout) {
		const url = new URL(`/physician-schedule`, env.SCHEDULE_API_BASE_URL);
		const response = await fetch(url);
		schedules = response.json();
		last_requested_at = Date.now();
	}
	return schedules;
}

export async function load() {
	return {
		lazy: {
			physicianSchedules: get_physician_schedules()
		}
	};
}
