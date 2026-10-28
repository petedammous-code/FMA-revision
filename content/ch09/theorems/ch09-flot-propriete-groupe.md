---
id: ch09-flot-propriete-groupe
type: proposition
chapter: 9
title: Formule de composition du flot ; propriété de groupe à un paramètre $F_s\cdot(F_t\cdot x)=F_{t+s}\cdot x$
ref: Formule (IX.8.3)
page: 174
importance: 2
depends: [ch07-composition-flot, ch07-unicite-globale, ch09-flot-global-sous-variete-def, ch09-courbe-integrale-maximale-sous-variete, ch09-flot-local-sous-variete, ch07-translation-temps-autonome, ch07-groupe-un-parametre]
tags: [flot, flot-global, composition, groupe-a-un-parametre, sous-variete, champ-tangent, autonome]
---
## Intuition

> 💡 **Chasles pour les trajectoires sur $S$.** Partir de $x$ et suivre le champ pendant une durée $t$, puis repartir du point atteint et suivre le champ pendant une durée $s$, revient à suivre le champ pendant la durée $t+s$ : on parcourt la **même** courbe intégrale, d'un seul trait ou avec une escale. Sur la sphère, pour le champ de rotation autour de l'axe $e_3$, $F_t$ est la rotation d'angle $t$ et la formule dit simplement que les angles s'ajoutent.

Rien de nouveau par rapport au chapitre VII ([[ch07-composition-flot]], [[ch07-groupe-un-parametre]]) : la preuve n'utilise que l'**unicité** des courbes intégrales, qui reste vraie sur une sous-variété grâce au théorème IX.8.5 ([[ch09-flot-local-sous-variete]]).

Notations ([[ch09-flot-global-sous-variete-def]]). $S$ est une sous-variété de $\R^N$, $X : I\times S\to\R^N$ un champ de vecteurs tangents ($X(t,x)\in T_xS$), localement lipschitzien en la seconde variable. Pour $(t_0,x)\in I\times S$, $\alpha_{t_0,x} : J_{t_0}(x)\to S$ est la **courbe intégrale maximale** de condition initiale $(t_0,x)$, définie sur l'intervalle ouvert $J_{t_0}(x)\ni t_0$ (son « intervalle de vie », [[ch09-courbe-integrale-maximale-sous-variete]]) ; le **flot global** est $F(t_0,t,x)=\alpha_{t_0,x}(t)$, défini sur $D=\{(t_0,t,x)\in I\times I\times S\mid t\in J_{t_0}(x)\}$. Si $X$ ne dépend pas du temps, on prend $I=\R$, $t_0=0$, et l'on note $J(x)=J_0(x)$, $D_0=\{(t,x)\in\R\times S\mid t\in J(x)\}$ et $F_t\cdot x=F(t,x)=F(0,t,x)=\alpha_{0,x}(t)$ : c'est la position au temps $t$ du point parti de $x$ au temps $0$.

## Énoncé

**Proposition (poly, Formule (IX.8.3), p. 174).** Soit $X : I\times S\to\R^N$ un champ de vecteurs tangents dépendant du temps sur une sous-variété $S$ de $\R^N$, localement lipschitzien en la seconde variable, de flot global $F : D\to S$.

1. *(Formule de composition.)* Soit $(t_0,x)\in I\times S$. Supposons que $s$ et $s+t$ soient dans $J_{t_0}(x)$. Alors $F(s,s+t,F(t_0,s,x))$ est défini et
$$
F(t_0,s+t,x)=F\big(s,\,s+t,\,F(t_0,s,x)\big),
$$
c'est-à-dire que la formule de composition du théorème VII.3.7 est encore valide dans ce cadre.

2. *(Propriété de groupe.)* Lorsque le champ de vecteurs tangents $X$ ne dépend pas du temps (on fixe alors $\tau_0=0$), on a, lorsque $(t,x)$ et $(s,F_t\cdot x)$ sont dans $D_0$,
$$
F_s\cdot(F_t\cdot x)=F_{t+s}\cdot x.\qquad\text{(IX.8.3)}
$$

*Complément (démontré dans la preuve).* Dans le cas 1, $J_s(y)=J_{t_0}(x)$ et $\alpha_{s,y}=\alpha_{t_0,x}$ pour $y=F(t_0,s,x)$. Dans le cas 2, si $t\in J(x)$ et $y=F_t\cdot x$, alors $J(y)=J(x)-t$ et $\alpha_{0,y}(u)=\alpha_{0,x}(t+u)$ ; en particulier, pour $(t,x)\in D_0$ : $(s,F_t\cdot x)\in D_0\iff(t+s,x)\in D_0$.

## Hypothèses

### H1 — $X$ localement lipschitzien en la seconde variable

**Rôle.** Garantit l'unicité des courbes intégrales sur $S$ (théorème IX.8.5, [[ch09-flot-local-sous-variete]]), donc l'existence de la courbe intégrale maximale et du flot global ; c'est l'unicité qui identifie le trajet « avec escale » au trajet direct.

**Si on la retire.** Le flot n'est même plus défini. Et si l'on choisit arbitrairement une solution par condition initiale, la propriété de groupe peut tomber en défaut. Exemple : $S=\R$ (ouvert de $\R$, donc sous-variété, [[ch09-ex-ouvert-sous-variete]]), $X(x)=2\abs x^{1/2}$, continu, tangent ($T_xS=\R$), non lipschitzien en $0$. La courbe $\alpha(t)=t^2$ pour $t\ge0$, $\alpha(t)=0$ pour $t\le0$ est une courbe intégrale issue de $0$ ($\alpha'(t)=2t=2\abs{t^2}^{1/2}$ pour $t\geq 0$, et $0=2\cdot 0$ pour $t\le0$). Si l'on décide que « $F_t\cdot 0$ » $=\alpha(t)$, alors $F_{-1}\cdot 0=0$ et $F_1\cdot(F_{-1}\cdot0)=F_1\cdot 0=1\ne0=F_0\cdot 0$ : (IX.8.3) est fausse avec $t=-1$, $s=1$.

### H2 — $X$ indépendant du temps (pour la forme (IX.8.3))

**Rôle.** Permet de remplacer l'instant d'escale absolu $s$ par une durée : la courbe translatée en temps $u\mapsto\alpha(u+t)$ est encore une courbe intégrale ([[ch07-translation-temps-autonome]]), ce qui n'est vrai que si $X$ ne dépend pas de $t$.

**Si on la retire.** Sur $S=\mathbb S^2$, avec $R_\theta$ la rotation d'angle $\theta$ d'axe $e_3$, le champ tangent $X(t,p)=t\,(e_3\wedge p)$ a pour flot $F(t_0,t,p)=R_{(t^2-t_0^2)/2}\,p$ (voir l'exemple 3). Posons $G_t=F(0,t,\cdot)=R_{t^2/2}$. Alors $G_s\circ G_t=R_{(s^2+t^2)/2}$ et $G_{t+s}=R_{(t+s)^2/2}$ : ils diffèrent exactement lorsque $R_{st}\ne\id$, c'est-à-dire dès que $st\notin2\pi\Z$, par exemple $s=t=1$ (angles $1$ et $2$). Seule la formule de composition à trois arguments reste vraie.

### H3 — Les instants sont dans les intervalles de vie

**Rôle.** Dans 1, $s\in J_{t_0}(x)$ rend le point d'escale $F(t_0,s,x)$ défini et $s+t\in J_{t_0}(x)$ rend le membre de gauche défini. Dans 2, $(t,x)\in D_0$ rend $F_t\cdot x$ défini et $(s,F_t\cdot x)\in D_0$ rend le membre de gauche défini.

**Si on la retire.** $S=\R$, $X(x)=x^2$ : $F_t\cdot x=\dfrac{x}{1-tx}$ sur $D_0=\{(t,x)\mid tx<1\}$ (exemple 2). Pour $x=1$, $t=2$, $s=-2$ : $t+s=0\in J(1)=\,]-\infty,1[$, donc $F_{t+s}\cdot 1=1$ est défini, mais $F_2\cdot1$ ne l'est pas ($2\cdot1\ge1$) : la particule a explosé au temps $1$, il n'y a pas de point d'escale au temps $2$, et le membre de gauche n'a pas de sens. Il ne suffit donc pas que $t+s$ soit dans $J(x)$.

## Idée de la preuve

Une courbe intégrale maximale qui passe par $y$ à l'instant $s$ **est** la courbe intégrale maximale de condition initiale $(s,y)$ : par unicité sur $S$ et maximalité, mêmes courbes et mêmes intervalles de vie. On évalue en $s+t$. Dans le cas autonome, on translate en temps pour ramener la condition initiale à l'instant $0$.

## Preuve

**Étape 0 : unicité globale sur $S$.** Si $\alpha_1 : J_1\to S$ et $\alpha_2 : J_2\to S$ sont deux courbes intégrales de $X$ de même condition initiale $(\tau,z)$, elles coïncident sur $J_1\cap J_2$. En effet, l'ensemble $A=\{u\in J_1\cap J_2\mid\alpha_1(u)=\alpha_2(u)\}$ contient $\tau$ ; il est fermé dans $J_1\cap J_2$ par continuité ; il est ouvert : si $u_1\in A$ et $z_1=\alpha_1(u_1)=\alpha_2(u_1)$, le théorème IX.8.5 ([[ch09-flot-local-sous-variete]]) fournit un flot local en $(u_1,z_1)$ et son énoncé d'unicité montre que $\alpha_1$ et $\alpha_2$, restreintes à un intervalle $]u_1-\epsilon',u_1+\epsilon'[\subset J_1\cap J_2$ avec $\epsilon'\le\epsilon$, sont toutes deux égales à $\alpha_{u_1,z_1}$. L'intervalle $J_1\cap J_2$ étant connexe, $A=J_1\cap J_2$. C'est la preuve de [[ch07-unicite-globale]], recopiée sur $S$ ; c'est elle qui permet de définir la courbe intégrale maximale ([[ch09-courbe-integrale-maximale-sous-variete]]) : $J_\tau(z)$ est la réunion des intervalles ouverts contenant $\tau$ portant une courbe intégrale de condition initiale $(\tau,z)$.

**1. Formule de composition.** Soit $y=F(t_0,s,x)=\alpha_{t_0,x}(s)\in S$, défini car $s\in J_{t_0}(x)$. Notons $J=J_{t_0}(x)$ et $J'=J_s(y)$.

* La courbe $\alpha_{t_0,x} : J\to S$ est une courbe intégrale définie sur un intervalle ouvert contenant $s$ et valant $y$ en $s$ : c'est une courbe intégrale de condition initiale $(s,y)$. Par définition de $J'$ comme réunion, $J\subset J'$, et par l'étape 0, $\alpha_{s,y}=\alpha_{t_0,x}$ sur $J$.
* En particulier $\alpha_{s,y}(t_0)=\alpha_{t_0,x}(t_0)=x$ : la courbe $\alpha_{s,y} : J'\to S$ est une courbe intégrale de condition initiale $(t_0,x)$, donc $J'\subset J$.

Ainsi $J_s(y)=J_{t_0}(x)$ et $\alpha_{s,y}=\alpha_{t_0,x}$. Comme $s+t\in J=J'$, les deux membres sont définis et
$$
F(t_0,s+t,x)=\alpha_{t_0,x}(s+t)=\alpha_{s,y}(s+t)=F(s,s+t,y)=F\big(s,s+t,F(t_0,s,x)\big).
$$

**2. Cas autonome.** Ici $I=\R$. Soit $(t,x)\in D_0$ et $y=F_t\cdot x=\alpha_{0,x}(t)$. Montrons $J(y)=J(x)-t$ et $\alpha_{0,y}(u)=\alpha_{0,x}(t+u)$.

* La courbe $\beta(u)=\alpha_{0,x}(t+u)$, définie sur l'intervalle ouvert $J(x)-t$ qui contient $0$, est à valeurs dans $S$ et vérifie $\beta'(u)=\alpha_{0,x}'(t+u)=X(\alpha_{0,x}(t+u))=X(\beta(u))$ : comme $X$ ne dépend pas du temps, c'est une courbe intégrale, et $\beta(0)=y$. Donc $J(x)-t\subset J(y)$ et, par l'étape 0, $\alpha_{0,y}=\beta$ sur $J(x)-t$.
* De même $\gamma(u)=\alpha_{0,y}(u-t)$, définie sur $J(y)+t$, est une courbe intégrale ; comme $-t\in J(x)-t\subset J(y)$, on a $\gamma(0)=\alpha_{0,y}(-t)=\beta(-t)=\alpha_{0,x}(0)=x$. Donc $J(y)+t\subset J(x)$.

Ainsi $J(y)=J(x)-t$ et $\alpha_{0,y}=\beta$. Si maintenant $(s,F_t\cdot x)=(s,y)\in D_0$, c'est-à-dire $s\in J(y)$, alors $t+s\in J(x)$ et
$$
F_s\cdot(F_t\cdot x)=\alpha_{0,y}(s)=\beta(s)=\alpha_{0,x}(t+s)=F_{t+s}\cdot x.\qquad\square
$$

*Remarque.* Le cas 2 se déduit aussi du cas 1 et de l'invariance par translation $F(s,s+u,y)=F(0,u,y)$ (même argument de translation) ; la rédaction ci-dessus a l'avantage de donner directement la condition de domaine du poly, $(t,x)\in D_0$ et $(s,F_t\cdot x)\in D_0$.

## Preuve à trous

*Unicité sur $S$.* Deux courbes intégrales de même condition initiale coïncident sur l'intersection de leurs intervalles : l'ensemble où elles coïncident est fermé par continuité, <trou indice="quel théorème donne l'unicité locale sur S ?">ouvert par l'énoncé d'unicité du flot local (théorème IX.8.5)</trou>, et non vide ; on conclut par connexité de l'intervalle.

*Composition.* Soit $y=F(t_0,s,x)$, $J=J_{t_0}(x)$, $J'=J_s(y)$. La courbe $\alpha_{t_0,x}$ passe par $y$ à l'instant $s$, donc <trou indice="changer de condition initiale">c'est une courbe intégrale de condition initiale $(s,y)$ : $J\subset J'$ et $\alpha_{s,y}=\alpha_{t_0,x}$ sur $J$</trou>. Réciproquement, $\alpha_{s,y}(t_0)=x$ donne $J'\subset J$. D'où, comme $s+t\in J$, $F(t_0,s+t,x)=\alpha_{s,y}(s+t)=F(s,s+t,F(t_0,s,x))$.

*Cas autonome.* Soit $y=F_t\cdot x$. La courbe <trou indice="translater en temps">$\beta(u)=\alpha_{0,x}(t+u)$, définie sur $J(x)-t$, est une courbe intégrale (car $X$ ne dépend pas du temps) de condition initiale $(0,y)$</trou>, donc $J(x)-t\subset J(y)$ et $\alpha_{0,y}=\beta$ sur $J(x)-t$ ; symétriquement, <trou indice="faire le chemin inverse">$u\mapsto\alpha_{0,y}(u-t)$ est une courbe intégrale valant $x$ en $0$, donc $J(y)+t\subset J(x)$</trou>. Pour $s\in J(y)$ : $F_s\cdot(F_t\cdot x)=\beta(s)=F_{t+s}\cdot x$. $\square$

## Exemples

**Exemple 1 (rotations de la sphère).** $S=\mathbb S^2\subset\R^3$, $X(p)=e_3\wedge p=(-p_2,p_1,0)$. On a $T_p\mathbb S^2=p^\perp$ ([[ch09-espace-tangent-graphe-equation]], avec l'équation $\norm p^2=1$ de différentielle $h\mapsto2\langle p,h\rangle$) et $\langle e_3\wedge p,p\rangle=0$ : $X$ est tangent, linéaire donc lipschitzien. Soit $R_t(p)=(p_1\cos t-p_2\sin t,\ p_1\sin t+p_2\cos t,\ p_3)$. Alors
$$
\frac{d}{dt}R_t(p)=(-p_1\sin t-p_2\cos t,\ p_1\cos t-p_2\sin t,\ 0)=e_3\wedge R_t(p),
$$
et $R_0(p)=p$ : $F_t=R_t$ pour tout $t\in\R$, $D_0=\R\times\mathbb S^2$. La propriété (IX.8.3) est $R_s\circ R_t=R_{t+s}$, c'est-à-dire les formules d'addition de $\cos$ et $\sin$. (Pour $X(p)=\omega\wedge p$ avec $\omega\ne0$ quelconque, $F_t$ est la rotation d'axe $\omega$ et d'angle $t\norm\omega$.)

**Exemple 2 (explosion, $S=\R$, $X(x)=x^2$).** $F_t\cdot x=\dfrac{x}{1-tx}$ pour $tx<1$ (si $x\neq0$, $\frac{d}{dt}\frac{x}{1-tx}=\frac{x^2}{(1-tx)^2}$ ; la solution part à l'infini quand $tx\to1$). Pour $(t,x)\in D_0$ :
$$
F_s\cdot(F_t\cdot x)=\frac{\frac{x}{1-tx}}{1-\frac{sx}{1-tx}}=\frac{x}{1-tx-sx}=F_{t+s}\cdot x,
$$
et la condition $(s,F_t\cdot x)\in D_0$ s'écrit $\frac{sx}{1-tx}<1\iff(t+s)x<1$ (car $1-tx>0$), c'est-à-dire $(t+s,x)\in D_0$ : c'est exactement le complément de l'énoncé.

**Exemple 3 (champ dépendant du temps sur $\mathbb S^2$).** $X(t,p)=t\,(e_3\wedge p)$, tangent. Avec $R_\theta$ comme dans l'exemple 1, $\alpha(t)=R_{(t^2-t_0^2)/2}\,p$ vérifie $\alpha'(t)=t\,e_3\wedge\alpha(t)$ et $\alpha(t_0)=p$, donc $F(t_0,t,p)=R_{(t^2-t_0^2)/2}\,p$ sur $D=\R^2\times\mathbb S^2$. Formule de composition :
$$
F\big(s,s+t,F(t_0,s,p)\big)=R_{((s+t)^2-s^2)/2}\,R_{(s^2-t_0^2)/2}\,p=R_{((s+t)^2-t_0^2)/2}\,p=F(t_0,s+t,p).
$$
Il était essentiel de repartir **à l'instant $s$** : $F(0,t,\cdot)\circ F(0,s,\cdot)=R_{(s^2+t^2)/2}\ne F(0,s+t,\cdot)$ en général (hypothèse H2).

## Pièges

* > ⚠️ (IX.8.3) n'a de sens que si $F_t\cdot x$ **et** $F_s\cdot(F_t\cdot x)$ sont définis : vérifier $(t,x)\in D_0$ puis $(s,F_t\cdot x)\in D_0$. « $t+s\in J(x)$ » ne suffit pas (hypothèse H3).
* > ⚠️ Pour un champ dépendant du temps, on n'a pas de groupe à un paramètre : l'instant d'escale est **absolu**, $F(s,s+t,\cdot)$ et non $F(0,t,\cdot)$.
* L'ordre de composition : $F_s\cdot(F_t\cdot x)$ = « d'abord $t$, puis $s$ » ; dans le cas autonome, $F_s\circ F_t=F_t\circ F_s$ (les deux valent $F_{t+s}$ là où elles sont définies), mais cette commutation est une conséquence, pas une évidence.
* Sur une sous-variété, l'unicité des courbes intégrales vient du théorème IX.8.5 appliqué **sur $S$** ; il n'est pas nécessaire (et pas toujours possible sans travail) de prolonger $X$ à un ouvert de $\R^N$.
* Si $D_0=\R\times S$ (par exemple $S$ compacte, [[ch09-flot-complet-compacte]]), (IX.8.3) vaut pour tous $s,t\in\R$, et $t\mapsto F_t$ devient un morphisme de groupes ([[ch09-flot-morphisme-groupes-diffeos]]).
