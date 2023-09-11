// ==UserScript==
// @name         Cable Patching MCM helper
// @namespace    https://mcm.amazon.com
// @version      0.1
// @description  Collect input and fill the cable patch MCM template
// @author       chengng@
// @match      https://mcm.amazon.com/cms/new?from_template=d3a442df-63cb-49b6-8501-60a202a1fa59
// @updateURL https://raw.githubusercontent.com/joshm3u/cable-install-MCM-helper/main/cable%20helper.js
// @downloadURL https://raw.githubusercontent.com/joshm3u/cable-install-MCM-helper/main/cable%20helper.js
// @grant        none
// ==/UserScript==

/*
REVISION HISTORY:
0.1  - 2023-09-11 - chengng@ - Initial setup for the patching helper
*/

(function() {
    'use strict';

   // Function to prompt the user for input
    function getUserInputAndReplace() {
        const userInput1 = prompt('Enter the text to replace "01_site":');
        const userInput2 = prompt('Enter the text to replace "02_fabric_or_service_name":');
        const userInput3 = prompt('Enter the text to replace "03_project_name":');
        const userInput4 = prompt('Enter the text to replace "04_FBN":');
        const userInput5 = prompt('Enter the text to replace "05_vendor_name":');
        const userInput6 = prompt('Enter the text to replace "06_vendor_POC_information":');
        const userInput7 = prompt('Enter the text to replace "07_primary_sim_URL":');
        const userInput8 = "N/A"; // Predefined input for 08_vendor_walkthrough_MCM
        const userInput9 = prompt('Enter the text to replace "09_Is_this_MCM_a_continuation_of_a_previous_MCM_if_yes_list_them_below_and_attach_them_in_related_items":');
        const userInput10 = prompt('Enter the text to replace "10_number_of_affected_devices_cabling_is_being_installed_for":');
        const userInput11 = prompt('Enter the text to replace "11_number_of_connections_to_be_ran":');
        const userInput12 = prompt('Enter the text to replace "12_list_all_hostnames_locations_production_status_and_if_in_scope_of_this_activity":');
        const userInput13 = prompt('Enter the text to replace "13_patch_panels_and_locations_if_applicable":');
        const userInput14 = "normal business hour"; // Predefined input for 14_why_is_this_the_correct_time_and_day_to_complete_the_mcm based on majority MCM like this
        const userInput15 = prompt('Enter the text to replace "15_are_there_any_related_MCMs_that_must_be_completed_before_this_change_occurs":');
        const userInput16 = prompt('Enter the text to replace "16_are_the_Cut_sheet_MCMs_in_a_fully_approved_state_if_yes_list_them_below_and_attach_them_in_related_items":');
        const userInput17 = "non-intrusive"; //Predefined input for 17_if_this_MCM_is_intrusive_what_services_will_be_affected
        const userInput18 = "Yes"; // Predefined input for 18_have_we_segmented_this_change_into_small_enough_stages_to_minimize_the_blast_radius_accelerate_impact_detection_and_ease_rollback
        const userInput19 = "New Cable Installations is Tier 4 as per https://w.amazon.com/bin/view/GlobalEdge/Documentation/MCM/"; // Predefined input for 19_what_is_the_justification_for_this_tier_level
        const userInput20 = prompt('Enter the text to replace "20_timeline_or_activity_plan":');
        const userInput21 = "Impact could cause interface flapping which could cause customer impact"; // Predefined input for 21_what_could_happen_if_this_change_causes_impact
        const userInput22 = "Fibers could be bumped, jarred and bent during installations."; // Predefined input for 22_where_are_the_most_likely_places_this_change_will_fail
        const userInput23 = "1.) In the event that impact is detected by EDGE OPS oncall, EDGE Projects will immediately halt work.\n2.) Edge Projects will standby for directions provided by EDGE OPS oncall to assist in mitigation of impact.\n3.) EDGE Projects will perform said directed activities and inform EDGE OPS oncall of expected recovery.\n4.) EDGE Projects will then confirm recovery and re-evaluate if work can re-continue alongside EDGE OPS."; // Predefined input for 23_describe_rollback_plan


        if (userInput1 !== null && userInput2 !== null && userInput3 !== null && userInput4 !== null && userInput5 !== null && userInput6 !== null && userInput7 !== null && userInput9 !== null && userInput10 !== null && userInput11 !== null && userInput12 !== null && userInput13 !== null && userInput15 !== null && userInput16 !== null && userInput20 !== null) {
            // Paste user input 1 into textarea with id 'templateVariables[{{01_site}}]'
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{01_site}}]', userInput1);

            // Paste user input 2 into textarea with id 'templateVariables[{{02_fabric_or_service_name}}]'
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{02_fabric_or_service_name}}]', userInput2);

            // continue the paste for the rest
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{03_project_name}}]', userInput3);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{04_FBN}}]', userInput4);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{05_vendor_name}}]', userInput5);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{06_vendor_POC_information}}]', userInput6);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{07_primary_sim_URL}}]', userInput7);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{08_vendor_walkthrough_MCM}}]', userInput8);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{09_Is_this_MCM_a_continuation_of_a_previous_MCM_if_yes_list_them_below_and_attach_them_in_related_items}}]', userInput9);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{10_number_of_affected_devices_cabling_is_being_installed_for}}]', userInput10);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{11_number_of_connections_to_be_ran}}]', userInput11);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{12_list_all_hostnames_locations_production_status_and_if_in_scope_of_this_activity}}]', userInput12);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{13_patch_panels_and_locations_if_applicable}}]', userInput13);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{14_why_is_this_the_correct_time_and_day_to_complete_the_mcm}}]', userInput14);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{15_are_there_any_related_MCMs_that_must_be_completed_before_this_change_occurs}}]', userInput15);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{16_are_the_Cut_sheet_MCMs_in_a_fully_approved_state_if_yes_list_them_below_and_attach_them_in_related_items}}]', userInput16);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{17_if_this_MCM_is_intrusive_what_services_will_be_affected}}]', userInput17);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{18_have_we_segmented_this_change_into_small_enough_stages_to_minimize_the_blast_radius_accelerate_impact_detection_and_ease_rollback}}]', userInput18);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{19_what_is_the_justification_for_this_tier_level}}]', userInput19);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{20_timeline_or_activity_plan}}]', userInput20);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{21_what_could_happen_if_this_change_causes_impact}}]', userInput21);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{22_where_are_the_most_likely_places_this_change_will_fail}}]', userInput22);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{23_describe_rollback_plan}}]', userInput23);

            // Replace {{01_site}} in the textarea with name "description"
            replacePlaceholderInTextarea('description', '{{01_site}}', userInput1);

            // Replace remaining in the textarea with name "description"
            replacePlaceholderInTextarea('description', '{{02_fabric_or_service_name}}', userInput2);
            replacePlaceholderInTextarea('description', '{{03_project_name}}', userInput3);
            replacePlaceholderInTextarea('description', '{{04_FBN}}', userInput4);
            replacePlaceholderInTextarea('description', '{{05_vendor_name}}', userInput5);
            replacePlaceholderInTextarea('description', '{{06_vendor_POC_information}}', userInput6);
            replacePlaceholderInTextarea('description', '{{07_primary_sim_URL}}', userInput7);
            replacePlaceholderInTextarea('description', '{{08_vendor_walkthrough_MCM}}', userInput8);
            replacePlaceholderInTextarea('description', '{{09_Is_this_MCM_a_continuation_of_a_previous_MCM_if_yes_list_them_below_and_attach_them_in_related_items}}', userInput9);
            replacePlaceholderInTextarea('description', '{{10_number_of_affected_devices_cabling_is_being_installed_for}}', userInput10);
            replacePlaceholderInTextarea('description', '{{11_number_of_connections_to_be_ran}}', userInput11);
            replacePlaceholderInTextarea('description', '{{12_list_all_hostnames_locations_production_status_and_if_in_scope_of_this_activity}}', userInput12);
            replacePlaceholderInTextarea('description', '{{13_patch_panels_and_locations_if_applicable}}', userInput13);
            replacePlaceholderInTextarea('description', '{{14_why_is_this_the_correct_time_and_day_to_complete_the_mcm}}', userInput14);
            replacePlaceholderInTextarea('description', '{{15_are_there_any_related_MCMs_that_must_be_completed_before_this_change_occurs}}', userInput15);
            replacePlaceholderInTextarea('description', '{{16_are_the_Cut_sheet_MCMs_in_a_fully_approved_state_if_yes_list_them_below_and_attach_them_in_related_items}}', userInput16);
            replacePlaceholderInTextarea('description', '{{17_if_this_MCM_is_intrusive_what_services_will_be_affected}}', userInput17);
            replacePlaceholderInTextarea('description', '{{18_have_we_segmented_this_change_into_small_enough_stages_to_minimize_the_blast_radius_accelerate_impact_detection_and_ease_rollback}}', userInput18);
            replacePlaceholderInTextarea('description', '{{19_what_is_the_justification_for_this_tier_level}}', userInput19);
            replacePlaceholderInTextarea('description', '{{20_timeline_or_activity_plan}}', userInput20);
            replacePlaceholderInTextarea('description', '{{21_what_could_happen_if_this_change_causes_impact}}', userInput21);
            replacePlaceholderInTextarea('description', '{{22_where_are_the_most_likely_places_this_change_will_fail}}', userInput22);
            replacePlaceholderInTextarea('description', '{{23_describe_rollback_plan}}', userInput23);

            // Replace {{01_site}} in the input field with name "title"
            replacePlaceholderInInput('title', '{{01_site}}', userInput1);

            // Replace remaining in the input field with name "title"
            replacePlaceholderInInput('title', '{{02_fabric_or_service_name}}', userInput2);
            replacePlaceholderInInput('title', '{{03_project_name}}', userInput3);
            replacePlaceholderInInput('title', '{{04_FBN}}', userInput4);
            replacePlaceholderInInput('title', '{{05_vendor_name}}', userInput5);

        } else {
            alert('You must provide replacement text for both placeholders.');
        }
    }

    // Function to replace a placeholder in a textarea with a specific name
    function replacePlaceholderInTextarea(textareaName, placeholder, replacement) {
        const textarea = document.querySelector(`textarea[name="${textareaName}"]`);
        if (textarea) {
            const text = textarea.value;
            const regex = new RegExp(placeholder, "g");
            const newText = text.replace(regex, replacement);
            textarea.value = newText;
        }
    }

    // Function to replace a placeholder in an input field with a specific name
    function replacePlaceholderInInput(inputName, placeholder, replacement) {
        const inputField = document.querySelector(`input[name="${inputName}"]`);
        if (inputField) {
            inputField.value = inputField.value.replace(placeholder, replacement);
        }
    }

    // Function to paste user input into a specific textarea within a table
    function pasteUserInputInTextarea(tableId, textareaId, userInput) {
        const table = document.getElementById(tableId);
        if (table) {
            const textarea = table.querySelector(`textarea[id="${textareaId}"]`);
            if (textarea) {
                textarea.value = userInput;
            }
        }
    }

    // Call the getUserInputAndReplace function when the script runs
    getUserInputAndReplace();

})();
