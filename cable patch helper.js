// ==UserScript==
// @name         Cable Patching MCM helper
// @namespace    https://mcm.amazon.com
// @version      0.2
// @description  Collect input and fill the cable patch MCM template
// @author       chengng@
// @match      https://mcm.amazon.com/cms/new?from_template=7b61ac86-0baa-44af-b9f5-be930912b72d
// @updateURL  https://raw.githubusercontent.com/joshm3u/cable-patch-helper/main/cable%20patch%20helper.js
// @downloadURL https://raw.githubusercontent.com/joshm3u/cable-patch-helper/main/cable%20patch%20helper.js
// @grant        none
// ==/UserScript==

/*
REVISION HISTORY:
0.1 - 2023-09-11 - chengng@ - Initial setup for the patching helper
0.2 - 2023-09-11 - chengng@ - Update and test
*/

(function() {
    'use strict';

   // Function to prompt the user for input
    function getUserInputAndReplace() {
        const userInput1 = prompt('Enter the text to replace "01_site":');
        const userInput2 = prompt('Enter the text to replace "02_fabric_or_service_name":');
        const userInput3 = prompt('Enter the text to replace "03_project_name":');
        const userInput4 = prompt('Enter the text to replace "04_FBN":');
        const userInput5 = prompt('Enter the text to replace "05_justification_for_change_and_purpose_of_project":');
        const userInput6 = prompt('Enter the text to replace "06_Is_this_MCM_a_continuation_of_a_previous_MCM_if_yes_list_them_below_and_attach_them_in_related_items":');
        const userInput7 = prompt('Enter the text to replace "07_primary_sim_URL":');
        const userInput8 = "N/A"; // Predefined input for 08_mobius_link
        const userInput9 = "N/A"; // Predefined input for 09_NARG_tickets_Link
        const userInput10 = prompt('Enter the text to replace "10_number_of_affected_devices":');
        const userInput11 = prompt('Enter the text to replace "11_number_of_connections_to_be_patched_or_validated":');
        const userInput12 = "N/A"; // Predefined input for 12_is_two_person_verification_required_for_this_activity_if_yes_explain
        const userInput13 = "N/A"; // Predefined input for 13_alias_of_Performer
        const userInput14 = "N/A"; // Predefined input for 14_alias_of_Verifier
        const userInput15 = "Manual_Input_Here"; // Predefined input for 15_list_all_hostnames_locations_production_status_and_if_in_scope_of_this_activity
        const userInput16 = "Manual_Input_Here"; // Predefined input for 16_patch_panels_and_locations_if_applicable
        const userInput17 = "normal business hour for cable patching"; //Predefined input for 17_why_is_this_the_correct_time_and_day_to_complete_the_mcm
        const userInput18 = "Yes"; // Predefined input for 18_are_there_any_related_MCMs_that_must_be_completed_before_this_change_occurs
        const userInput19 = "Yes, Please_paste_NDE_cutsheet_here"; // Predefined input for "; // Predefined input for 19_are_the_Cut_sheet_MCMs_in_a_fully_approved_state_if_yes_list_them_below_and_attach_them_in_related_items
        const userInput20 = "non-intrusive"; // Predefined input for 20_if_this_MCM_is_intrusive_what_services_will_be_affected
        const userInput21 = "Yes"; // Predefined input for 21_have_we_segmented_this_change_into_small_enough_stages_to_minimize_the_blast_radius_accelerate_impact_detection_and_ease_rollback
        const userInput22 = "Cable patching is Tier 3 according to https://w.amazon.com/bin/view/GlobalEdge/Documentation/MCM/"; // Predefined input for 22_what_is_the_justification_for_this_tier_level
        const userInput23 = "non-intrusive"; // Predefined input for 23_list_every_step_that_you_will_take_during_your_activity
        const userInput24 = "Impact could cause interface flapping which could cause customer impact"; // Predefined input for 24_what_could_happen_if_this_change_causes_impact
        const userInput25 = "Fiber will be patched into NON-LIVE and/or LIVE racks which existing service might be jarred, bumped, cut, bent, or otherwise disrupted to the point of causing interface flapping which could cause customer impact."; // Predefined input for 25_where_are_the_most_likely_places_this_change_will_fail
        const userInput26 = "1.) In the event that impact is detected by EDGE OPS oncall, EDGE Projects will immediately halt work.\n2.) Edge Projects will standby for directions provided by EDGE OPS oncall to assist in mitigation of impact.\n3.) EDGE Projects will perform said directed activities and inform EDGE OPS oncall of expected recovery.\n4.) EDGE Projects will then confirm recovery and re-evaluate if work can re-continue alongside EDGE OPS."; // Predefined input for 26_describe_rollback_plan


        if (userInput1 !== null && userInput2 !== null && userInput3 !== null && userInput4 !== null && userInput5 !== null && userInput6 !== null && userInput7 !== null && userInput9 !== null && userInput10 !== null && userInput11 !== null && userInput12 !== null && userInput13 !== null && userInput15 !== null && userInput16 !== null && userInput20 !== null) {
            // Paste user input 1 into textarea with id 'templateVariables[{{01_site}}]'
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{01_site}}]', userInput1);

            // Paste user input 2 into textarea with id 'templateVariables[{{02_fabric_or_service_name}}]'
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{02_fabric_or_service_name}}]', userInput2);

            // continue the paste for the rest
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{03_project_name}}]', userInput3);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{04_FBN}}]', userInput4);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{05_justification_for_change_and_purpose_of_project}}]', userInput5);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{06_Is_this_MCM_a_continuation_of_a_previous_MCM_if_yes_list_them_below_and_attach_them_in_related_items}}]', userInput6);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{07_primary_sim_URL}}]', userInput7);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{08_mobius_link}}]', userInput8);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{09_NARG_tickets_Link}}]', userInput9);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{10_number_of_affected_devices}}]', userInput10);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{11_number_of_connections_to_be_patched_or_validated}}]', userInput11);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{12_is_two_person_verification_required_for_this_activity_if_yes_explain}}]', userInput12);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{13_alias_of_Performer}}]', userInput13);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{14_alias_of_Verifier}}]', userInput14);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{15_list_all_hostnames_locations_production_status_and_if_in_scope_of_this_activity}}]', userInput15);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{16_patch_panels_and_locations_if_applicable}}]', userInput16);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{17_why_is_this_the_correct_time_and_day_to_complete_the_mcm}}]', userInput17);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{18_are_there_any_related_MCMs_that_must_be_completed_before_this_change_occurs}}]', userInput18);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{19_are_the_Cut_sheet_MCMs_in_a_fully_approved_state_if_yes_list_them_below_and_attach_them_in_related_items}}]', userInput19);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{20_if_this_MCM_is_intrusive_what_services_will_be_affected}}]', userInput20);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{21_what_could_happen_if_this_change_causes_impact}}]', userInput21);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{22_where_are_the_most_likely_places_this_change_will_fail}}]', userInput22);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{23_describe_rollback_plan}}]', userInput23);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{24_what_could_happen_if_this_change_causes_impact}}]', userInput24);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{25_where_are_the_most_likely_places_this_change_will_fail}}]', userInput25);
            pasteUserInputInTextarea('templateVariablesTable', 'templateVariables[{{26_describe_rollback_plan}}]', userInput26);

            // Replace {{01_site}} in the textarea with name "description"
            replacePlaceholderInTextarea('description', '{{01_site}}', userInput1);

            // Replace remaining in the textarea with name "description"
            replacePlaceholderInTextarea('description', '{{02_fabric_or_service_name}}', userInput2);
            replacePlaceholderInTextarea('description', '{{03_project_name}}', userInput3);
            replacePlaceholderInTextarea('description', '{{04_FBN}}', userInput4);
            replacePlaceholderInTextarea('description', '{{05_justification_for_change_and_purpose_of_project}}', userInput5);
            replacePlaceholderInTextarea('description', '{{06_Is_this_MCM_a_continuation_of_a_previous_MCM_if_yes_list_them_below_and_attach_them_in_related_items}}', userInput6);
            replacePlaceholderInTextarea('description', '{{07_primary_sim_URL}}', userInput7);
            replacePlaceholderInTextarea('description', '{{08_mobius_link}}', userInput8);
            replacePlaceholderInTextarea('description', '{{09_NARG_tickets_Link}}', userInput9);
            replacePlaceholderInTextarea('description', '{{10_number_of_affected_devices}}', userInput10);
            replacePlaceholderInTextarea('description', '{{11_number_of_connections_to_be_patched_or_validated}}', userInput11);
            replacePlaceholderInTextarea('description', '{{12_is_two_person_verification_required_for_this_activity_if_yes_explain}}', userInput12);
            replacePlaceholderInTextarea('description', '{{13_alias_of_Performer}}', userInput13);
            replacePlaceholderInTextarea('description', '{{14_alias_of_Verifier}}', userInput14);
            replacePlaceholderInTextarea('description', '{{15_list_all_hostnames_locations_production_status_and_if_in_scope_of_this_activity}}', userInput15);
            replacePlaceholderInTextarea('description', '{{16_patch_panels_and_locations_if_applicable}}', userInput16);
            replacePlaceholderInTextarea('description', '{{17_why_is_this_the_correct_time_and_day_to_complete_the_mcm}}', userInput17);
            replacePlaceholderInTextarea('description', '{{18_are_there_any_related_MCMs_that_must_be_completed_before_this_change_occurs}}', userInput18);
            replacePlaceholderInTextarea('description', '{{19_are_the_Cut_sheet_MCMs_in_a_fully_approved_state_if_yes_list_them_below_and_attach_them_in_related_items}}', userInput19);
            replacePlaceholderInTextarea('description', '{{20_if_this_MCM_is_intrusive_what_services_will_be_affected}}', userInput20);
            replacePlaceholderInTextarea('description', '{{21_what_could_happen_if_this_change_causes_impact}}', userInput21);
            replacePlaceholderInTextarea('description', '{{22_where_are_the_most_likely_places_this_change_will_fail}}', userInput22);
            replacePlaceholderInTextarea('description', '{{23_describe_rollback_plan}}', userInput23);
            replacePlaceholderInTextarea('description', '{{24_what_could_happen_if_this_change_causes_impact}}', userInput24);
            replacePlaceholderInTextarea('description', '{{25_where_are_the_most_likely_places_this_change_will_fail}}', userInput25);
            replacePlaceholderInTextarea('description', '{{26_describe_rollback_plan}}', userInput26);
            
            // Replace {{01_site}} in the input field with name "title"
            replacePlaceholderInInput('title', '{{01_site}}', userInput1);

            // Replace remaining in the input field with name "title"
            replacePlaceholderInInput('title', '{{02_fabric_or_service_name}}', userInput2);
            replacePlaceholderInInput('title', '{{03_project_name}}', userInput3);
            replacePlaceholderInInput('title', '{{04_FBN}}', userInput4);

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
