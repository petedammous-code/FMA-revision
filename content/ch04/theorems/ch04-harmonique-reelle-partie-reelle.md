---
id: ch04-harmonique-reelle-partie-reelle
type: corollary
chapter: 4
title: Une fonction harmonique réelle sur un ouvert simplement connexe est la partie réelle d'une fonction holomorphe
ref: Corollaire IV.2.4
page: 77
importance: 3
depends: [ch04-harmonique-f-plus-g-barre, ch01-cauchy-riemann, ch02-primitive-simplement-connexe]
tags: [harmonique, partie-reelle, simplement-connexe, fonction-conjuguee, cauchy-riemann, potentiel-complexe]
---
## Intuition

> 💡 Une fonction harmonique réelle $h$ n'est que la « moitié » d'une fonction holomorphe : il lui manque une partie imaginaire $v$, appelée **fonction harmonique conjuguée**, telle que $F = h+iv$ soit holomorphe. Les équations de Cauchy–Riemann disent exactement comment la fabriquer : $\partial_x v = -\partial_y h$, $\partial_y v = \partial_x h$. Ce système a une solution dès que l'on peut intégrer sans ambiguïté le long des chemins, c'est-à-dire sur un ouvert simplement connexe. La partie imaginaire ainsi reconstruite est unique à une constante réelle près.

Image mentale (physique) : si $h = \Phi$ est un potentiel (électrostatique, des vitesses), $F = \Phi+i\Psi$ est le **potentiel complexe** et $\Psi$ la fonction de courant ; les lignes de niveau de $\Phi$ et de $\Psi$ sont orthogonales ([[ch04-lignes-niveau-orthogonales]]). C'est le point de départ de toute la section IV.4 ([[ch04-ecoulement-potentiel]], [[ch04-chaleur-couronne]]).

Rappels : $h$ **harmonique** signifie $C^2$ et $\Delta h = 0$ ([[ch04-harmonique-def]]) ; $\Omega$ **simplement connexe** : connexe et tout lacet homotope à un lacet constant ([[ch02-homotopie-simplement-connexe]]) ; le résultat général $h = f+\bar g$ est [[ch04-harmonique-f-plus-g-barre]].

## Énoncé

**Corollaire (poly, Corollaire IV.2.4, p. 77).** Une fonction harmonique **réelle** $h$, définie sur un ouvert **simplement connexe** $\Omega$, est la partie réelle d'une fonction holomorphe $F\in\Hol(\Omega)$ :
$$
h = \Re F ,
$$
et $F$ est unique à une constante additive imaginaire pure près : si $\Re F_1 = \Re F_2 = h$ sur $\Omega$, alors $F_1-F_2\in i\R$ est constante.

*Formule pratique.* On peut prendre pour $F$ n'importe quelle primitive holomorphe de la fonction holomorphe
$$
F' = 2\,\frac{\partial h}{\partial z} = \frac{\partial h}{\partial x}-i\,\frac{\partial h}{\partial y} .
$$

## Hypothèses

### H1 — $\Omega$ est simplement connexe

**Rôle.** Pour l'existence : c'est l'hypothèse du Théorème IV.2.2 (primitive holomorphe de $\partial_z h$ sur tout $\Omega$). Pour l'unicité : on utilise seulement la **connexité** de $\Omega$ (contenue dans la simple connexité).

**Si on la retire.** $h(z) = \log|z|$ est harmonique réelle sur $\C^*$ mais n'est la partie réelle d'aucune $F\in\Hol(\C^*)$. Vérification : si $\Re F = \log|z|$, alors $u = e^F/z$ est holomorphe sur $\C^*$ avec $|u| = e^{\log|z|}/|z| = 1$ ; $|u|$ constante sur l'ouvert connexe $\C^*$ force $u$ constante (principe du maximum, [[ch01-principe-maximum]]) : $e^F = cz$, d'où en dérivant $F' = 1/z$, et $1/z$ aurait une primitive sur $\C^*$, contredisant $\int_{C(0,1)}\frac{dz}{z} = 2i\pi\neq0$ ([[ch01-integrale-primitive]]). Concrètement, la conjuguée harmonique de $\log|z|$ « voudrait » être $\arg z$, qui saute de $2\pi$ quand on fait un tour : elle n'est définie que localement, ou sur $\C\setminus\R_-$ où $F = \mathrm{Log}\,z$ convient. Si $\Omega$ est seulement non connexe (réunion de deux disques disjoints), l'existence subsiste composante par composante, mais l'unicité tombe : $F_1-F_2$ peut valoir $i$ sur un disque et $2i$ sur l'autre.

### H2 — $h$ est à valeurs réelles

**Rôle.** C'est ce qui permet d'écrire $h = \bar h$ et de fusionner $f+\bar g$ et $\bar f+g$ en $2\Re(f+g)$. Pour l'unicité, c'est ce qui rend « $\Re(F_1-F_2) = 0$ » exploitable via Cauchy–Riemann.

**Si on la retire.** Une partie réelle est réelle : $h = \bar z$ (harmonique, complexe) n'est la partie réelle de rien. Le bon énoncé pour $h$ complexe est $h = f+\bar g$ ([[ch04-harmonique-f-plus-g-barre]]), avec deux fonctions holomorphes ; on peut aussi appliquer le corollaire à $\Re h$ et $\Im h$ séparément.

### H3 — $h$ est harmonique

**Rôle.** C'est l'hypothèse du Théorème IV.2.2 ; elle est aussi **nécessaire** : la partie réelle d'une fonction holomorphe est harmonique ([[ch04-holomorphe-implique-harmonique]]).

**Si on la retire.** $h = x^2+y^2$ n'est la partie réelle d'aucune fonction holomorphe, même localement ($\Delta h = 4\neq0$). Le système de Cauchy–Riemann $\partial_xv = -2y$, $\partial_yv = 2x$ n'a pas de solution : il faudrait $\partial_y\partial_x v = -2 = \partial_x\partial_y v = 2$.

## Idée de la preuve

Existence : $h = f+\bar g$ (Théorème IV.2.2) ; $h$ réelle donne aussi $h = \bar f+g$ ; la somme donne $2h = 2\Re(f+g)$. Unicité : $G = F_1-F_2$ holomorphe à partie réelle nulle a, par Cauchy–Riemann, toutes ses dérivées partielles nulles, donc est constante sur $\Omega$ connexe.

## Preuve

*Existence.* Soit $h:\Omega\to\R$ harmonique, $\Omega$ simplement connexe. D'après le Théorème IV.2.2 ([[ch04-harmonique-f-plus-g-barre]]), il existe $f,g\in\Hol(\Omega)$ tels que $h = f+\bar g$. Comme $h$ est à valeurs réelles, $h = \bar h = \bar f+g$. En additionnant les deux écritures,
$$
2h = f+\bar g+\bar f+g = (f+g)+\overline{(f+g)} = 2\,\Re(f+g) .
$$
La fonction $F := f+g$ est holomorphe sur $\Omega$ ([[ch01-stabilite-operations]]) et $h = \Re F$.

*Formule pour $F'$.* Dans la preuve du Théorème IV.2.2, $f$ est une primitive de $\partial_z h$ et $g = \overline{h-f}$. Donc $f' = \partial_z h$ et, par la formule de conjugaison (I.2.9) ([[ch01-formulaire-dz-dzbar]]), $g' = \partial_z g = \overline{\partial_{\bar z}(h-f)} = \overline{\partial_{\bar z}h}$ (car $\partial_{\bar z}f = 0$). Pour $h$ réelle, $\overline{\partial_{\bar z}h} = \partial_z\bar h = \partial_z h$. Ainsi $F' = f'+g' = 2\,\partial_z h = \partial_x h-i\,\partial_y h$. On peut vérifier directement que $2\partial_zh$ est holomorphe : $\partial_{\bar z}(2\partial_z h) = \tfrac12\Delta h = 0$ et $2\partial_z h$ est $C^1$ ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]) ; toute primitive de $2\partial_z h$ sur $\Omega$ ([[ch02-primitive-simplement-connexe]]) convient donc, à une constante près.

*Unicité.* Soient $F_1,F_2\in\Hol(\Omega)$ avec $\Re F_1 = \Re F_2 = h$. Posons $G := F_1-F_2 = P+iQ$ ($P,Q$ réelles) ; $G$ est holomorphe et $P = \Re G = 0$. Les conditions de Cauchy réelles ([[ch01-cauchy-riemann]], formule (I.2.6)) donnent
$$
\frac{\partial Q}{\partial x} = -\frac{\partial P}{\partial y} = 0 ,\qquad \frac{\partial Q}{\partial y} = \frac{\partial P}{\partial x} = 0 .
$$
Donc $G' = \partial_x P+i\,\partial_x Q = 0$ sur $\Omega$. Une fonction holomorphe de dérivée nulle sur un ouvert **connexe** est constante (c'est l'argument d'unicité des primitives, [[ch02-primitive-simplement-connexe]] : $dG = 0$ donc $G$ localement constante, donc constante sur un connexe). Ainsi $G\equiv iQ_0$ avec $Q_0\in\R$ : $F_1 = F_2+iQ_0$. $\square$

*Variante du poly :* le poly n'écrit que les deux lignes de l'existence et laisse l'unicité au lecteur ; on peut aussi la déduire du théorème de l'application ouverte ([[ch01-application-ouverte]]) : $G(\Omega)\subset i\R$ n'est pas ouvert, donc $G$ est constante.

## Preuve à trous

*Existence.* Par le Théorème IV.2.2, $h = f+\bar g$ avec $f,g\in\Hol(\Omega)$. Comme $h$ est réelle, <trou indice="conjuguer l'écriture">$h = \bar h = \bar f+g$</trou>. En additionnant, <trou>$2h = (f+g)+\overline{(f+g)} = 2\Re(f+g)$</trou>, donc $F := f+g$ convient. De plus $F' = f'+g' = \partial_z h+\overline{\partial_{\bar z} h} = 2\,\partial_z h = \partial_x h-i\,\partial_y h$.

*Unicité.* Si $\Re F_1 = \Re F_2$, alors $G = F_1-F_2 = P+iQ$ est holomorphe avec $P\equiv0$. Par <trou indice="le lien entre dérivées partielles de P et Q">Cauchy–Riemann : $\partial_x Q = -\partial_y P = 0$ et $\partial_y Q = \partial_x P = 0$</trou>, donc $G' = 0$ sur $\Omega$, et <trou indice="quelle hypothèse topologique sur Ω ?">$\Omega$ étant connexe, $G$ est constante</trou>, à valeurs dans $i\R$. $\square$

## Exemples

Dans chaque cas on applique la recette $F' = \partial_x h-i\,\partial_y h$, puis on intègre.

* **$h = x^2-y^2$ sur $\C$.** $F' = 2x-i(-2y) = 2(x+iy) = 2z$, donc $F = z^2+ic$ : en effet $\Re(z^2) = x^2-y^2$. La conjuguée harmonique est $v = \Im(z^2) = 2xy$ (à constante près) ; on vérifie Cauchy–Riemann : $\partial_x v = 2y = -\partial_y h$, $\partial_y v = 2x = \partial_x h$. $\checkmark$
* **$h = e^x\cos y$ sur $\C$.** $F' = e^x\cos y-i(-e^x\sin y) = e^x(\cos y+i\sin y) = e^z$, donc $F = e^z+ic$ et $v = e^x\sin y$. $\checkmark$
* **$h = x^3-3xy^2$.** $F' = (3x^2-3y^2)-i(-6xy) = 3(x^2-y^2+2ixy) = 3z^2$, $F = z^3+ic$ ; bien sûr $x^3-3xy^2 = \Re(z^3)$.
* **$h = \log|z|$ sur $\Omega = \C\setminus\R_-$** (étoilé par rapport à $1$, donc simplement connexe, [[ch02-etoile-simplement-connexe]]). $\partial_x h = \dfrac{x}{x^2+y^2}$, $\partial_y h = \dfrac{y}{x^2+y^2}$, $F' = \dfrac{x-iy}{x^2+y^2} = \dfrac{\bar z}{|z|^2} = \dfrac1z$, donc $F = \mathrm{Log}\,z+ic$ ([[ch02-logarithme-determination-principale-def]]) et $v = \mathrm{Arg}\,z$. Sur $\C^*$ tout entier, pas de $F$ (hypothèse H1) : $\mathrm{Arg}$ saute de $2\pi$ à travers $\R_-$.
* **Potentiel complexe.** Pour l'écoulement uniforme sur $H$ ([[ch04-ecoulement-potentiel]]), $\Phi_0 = \lambda x$ donne $F = \lambda z$ et la fonction de courant $\Psi = \lambda y$ : lignes de courant horizontales, équipotentielles verticales.

## Pièges

* > ⚠️ Sans simple connexité, pas de $F$ global : $\log|z|$ sur $\C^*$. Vérifier l'hypothèse avant d'écrire « soit $F$ holomorphe avec $\Re F = h$ » ; sinon se contenter d'un $F$ **local** ([[ch04-harmonique-decomposition-locale]]).
* L'unicité est « à constante **imaginaire pure** près », pas « à constante près » : ajouter une constante réelle changerait $\Re F$.
* Le signe dans $F' = \partial_x h-i\,\partial_y h$ : c'est $2\partial_z h$, pas $2\partial_{\bar z}h = \partial_x h+i\,\partial_y h$ (qui n'est pas holomorphe en général : $\partial_{\bar z}(2\partial_{\bar z}h) = 2\partial_{\bar z}^2 h\neq0$ sauf cas particuliers).
* La conjuguée harmonique $v$ de $h$ n'est pas « $\bar h$ » : c'est $\Im F$, une **autre** fonction réelle, définie par Cauchy–Riemann. Et $-h$ est la conjuguée de $v$ (car $iF = -v+ih$) : la relation n'est pas symétrique sans un signe.
* $h$ complexe : l'énoncé ne s'applique pas tel quel ; utiliser [[ch04-harmonique-f-plus-g-barre]] ou séparer $\Re h$ et $\Im h$.
