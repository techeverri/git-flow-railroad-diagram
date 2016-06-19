(function () {

    'use strict';

    var gitFlowRailroadDiagrams = document.getElementById('git-flow-railroad-diagrams');

    Diagram(
        Terminal('git flow'),
        Choice(0,
            Terminal('init'),
            Sequence(
                Choice(0,
                    NonTerminal('feature'),
                    NonTerminal('release'),
                    NonTerminal('hotfix')
                ),
                Choice(0,
                    NonTerminal('start'),
                    NonTerminal('finish'),
                    NonTerminal('publish'),
                    NonTerminal('pull')
                ),
                Terminal('name')
            )
        )
    ).addTo(gitFlowRailroadDiagrams);

})();