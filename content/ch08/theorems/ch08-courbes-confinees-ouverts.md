---
id: ch08-courbes-confinees-ouverts
type: definition
chapter: 8
title: "Lagrangien défini sur $I\times\mathcal U_1\times\mathcal U_2$ ; courbes confinées $E(\mathcal U_1,\mathcal U_2)$ et $E_{a,b}(\mathcal U_1,\mathcal U_2)$"
ref: "non numéroté, section VIII, p. 144"
page: 144
importance: 1
depends: [ch08-cadre-espace-courbes, ch08-lagrangien-fonctionnelle]
tags: [calcul-des-variations, ouvert, potentiel-singulier, espace-de-courbes, kepler]
---
## Intuition

> 💡 Jusqu'ici le Lagrangien $L(u,q,v)$ était défini pour **toute** position $q\in V$ et **toute** vitesse $v\in V$. En physique, ce n'est pas le cas : le potentiel de Kepler $U(q)=-\frac1{\norm q}$ n'a pas de sens en $q=0$ (la particule ne peut pas « passer » par le Soleil), et en relativité la vitesse doit rester de norme $<1$. On restreint donc les positions à un ouvert $\mathcal U_1$ et les vitesses à un ouvert $\mathcal U_2$, et on ne regarde que les courbes qui **restent** dans ces zones autorisées.

Image mentale : un tuyau (l'ouvert $\mathcal U_1$) dans lequel la courbe $\gamma$ doit circuler sans jamais toucher la paroi, et un « cône de vitesses permises » $\mathcal U_2$ que le vecteur vitesse $\gamma'(t)$ ne doit jamais quitter.

Rappels ([[ch08-cadre-espace-courbes]], [[ch08-lagrangien-fonctionnelle]]) : $V$ est un espace de Hilbert de dimension finie, $E=C^1([0;1];V)$ est muni de la norme $\norm\gamma_E=\sup_{t\in[0;1]}\norm{\gamma(t)}_V+\sup_{t\in[0;1]}\norm{\gamma'(t)}_V$, $E_{a,b}=\{\gamma\in E:\gamma(0)=a,\ \gamma(1)=b\}$, $I$ est un intervalle ouvert contenant $[0;1]$ et l'action est $\hat L(\gamma)=\int_0^1L(t,\gamma(t),\gamma'(t))\,dt$.

## Énoncé

**Définition (poly, non numérotée, section VIII, p. 144).** Soient $\mathcal U_1$ et $\mathcal U_2$ deux ouverts de $V$. On suppose le Lagrangien $L$ défini (et de classe $C^1$) non plus sur $I\times V\times V$, mais sur la partie $I\times\mathcal U_1\times\mathcal U_2$. On impose aux courbes $\gamma\in E$ de vérifier
$$
\forall t\in[0;1],\qquad \gamma(t)\in\mathcal U_1\quad\text{et}\quad\gamma'(t)\in\mathcal U_2
$$
(les courbes restent confinées dans $\mathcal U_1$, et leurs vecteurs tangents dans $\mathcal U_2$). On note
$$
E(\mathcal U_1,\mathcal U_2)=\{\gamma\in E:\ \forall t\in[0;1],\ \gamma(t)\in\mathcal U_1,\ \gamma'(t)\in\mathcal U_2\},\qquad E_{a,b}(\mathcal U_1,\mathcal U_2)=E(\mathcal U_1,\mathcal U_2)\cap E_{a,b}.
$$
Pour $\gamma\in E(\mathcal U_1,\mathcal U_2)$, le point $(t,\gamma(t),\gamma'(t))$ appartient à $I\times\mathcal U_1\times\mathcal U_2$ pour tout $t\in[0;1]$, de sorte que l'action $\hat L(\gamma)=\int_0^1L(t,\gamma(t),\gamma'(t))\,dt$ est bien définie sur $E(\mathcal U_1,\mathcal U_2)$.

Exemple motivant du poly : avec $L=\tfrac12\norm v^2-U(q)$ (question 7, [[ch08-equation-newton]]), autoriser le potentiel $U(q)=-\frac1{\norm q}$, défini seulement sur $V\setminus\{0\}$ ; on prend alors $\mathcal U_1=V\setminus\{0\}$ et $\mathcal U_2=V$.

## Hypothèses

### H1 — $\mathcal U_1$ et $\mathcal U_2$ sont des ouverts

**Rôle.** C'est ce qui rend $E(\mathcal U_1,\mathcal U_2)$ **ouvert** dans $E$ ([[ch08-ouverture-courbes-confinees]]) : on peut alors parler de différentielle de $\hat L$ en tout point de $E(\mathcal U_1,\mathcal U_2)$, de point critique, et refaire les questions 2 à 7 (une différentielle se définit en un point intérieur du domaine). C'est aussi ce qui permet de parler des différentielles partielles de $L$ en tout point de $I\times\mathcal U_1\times\mathcal U_2$.

**Si on la retire.** Avec $V=\R$, $\mathcal U_1=[-1,1]$ (fermé) et $\mathcal U_2=\R$, la courbe constante $\gamma_0\equiv1$ est dans $E(\mathcal U_1,\mathcal U_2)$, mais pour tout $\eta>0$ la courbe constante $\gamma_0+\eta$ n'y est pas, alors que $\norm{(\gamma_0+\eta)-\gamma_0}_E=\eta$ : l'ensemble n'est pas ouvert, et la notion de point critique n'a plus de sens en $\gamma_0$ (on ne peut pas faire varier $\gamma_0$ dans toutes les directions).

### H2 — La condition porte sur **tous** les $t\in[0;1]$, positions **et** vitesses

**Rôle.** L'intégrande $L(t,\gamma(t),\gamma'(t))$ doit être défini pour tout $t$ ; la condition sur $\gamma'$ est indispensable dès que $L$ n'est défini que pour certaines vitesses.

**Si on la retire.** Si l'on n'imposait que $\gamma(t)\in\mathcal U_1$, le Lagrangien relativiste $L(u,q,v)=-\sqrt{1-\norm v^2}$ (défini sur $\mathcal U_2=B(0,1)$) ne serait pas défini le long de $\gamma(t)=2t\,e$ ($\norm e=1$), dont la vitesse vaut $2$.

## Exemples

* **Problème de Kepler.** $V=\R^3$, $L(u,q,v)=\tfrac12\norm v^2+\frac1{\norm q}$, défini sur $I\times(V\setminus\{0\})\times V$ ; $\mathcal U_1=V\setminus\{0\}$, $\mathcal U_2=V$. La courbe $\gamma(t)=(1-2t)\,e$ ($\norm e=1$) relie $e$ à $-e$ mais passe par $0$ en $t=\tfrac12$ : elle n'est **pas** dans $E_{e,-e}(\mathcal U_1,\mathcal U_2)$ ; en revanche le demi-cercle $\gamma(t)=\cos(\pi t)\,e+\sin(\pi t)\,e'$ ($e'\perp e$ unitaire) y est, puisque $\norm{\gamma(t)}=1$.
* **Particule relativiste libre.** $L(u,q,v)=-\sqrt{1-\norm v^2}$, $\mathcal U_1=V$, $\mathcal U_2=B(0,1)$ (vitesses de norme $<1$, la vitesse de la lumière valant $1$). Le segment $\gamma(t)=a+t(b-a)$ est dans $E_{a,b}(V,B(0,1))$ si et seulement si $\norm{b-a}<1$.
* **Un $E_{a,b}(\mathcal U_1,\mathcal U_2)$ vide.** $\mathcal U_1=V$, $\mathcal U_2=\{v:\langle v,e\rangle>0\}$ (demi-espace ouvert). Pour $\gamma\in E_{a,b}(\mathcal U_1,\mathcal U_2)$, $\langle b-a,e\rangle=\int_0^1\langle\gamma'(t),e\rangle\,dt>0$ (intégrande continu et $>0$). Donc si $\langle b-a,e\rangle\le0$, l'ensemble $E_{a,b}(\mathcal U_1,\mathcal U_2)$ est vide. De même, $E_{a,b}(\mathcal U_1,\mathcal U_2)=\emptyset$ dès que $a\notin\mathcal U_1$, ou que $a$ et $b$ sont dans deux composantes connexes différentes de $\mathcal U_1$.

## Pièges

* Le poly écrit $\mathcal U_1,\mathcal U_2$ (lettres calligraphiques) pour les ouverts et réserve $U$ (droite) au **potentiel** : ne pas les confondre.
* $E(\mathcal U_1,\mathcal U_2)$ n'est **pas** un sous-espace vectoriel ni affine de $E$ (la courbe nulle n'est pas dans $E(V\setminus\{0\},V)$) : c'est un **ouvert** de $E$ ([[ch08-ouverture-courbes-confinees]]), ce qui suffit pour faire du calcul différentiel.
* La contrainte $\gamma'(t)\in\mathcal U_2$ porte sur la vitesse : elle n'est contrôlée par la norme de $E$ que parce que celle-ci contient le terme $\sup_t\norm{\gamma'(t)}_V$.
* $E_{a,b}(\mathcal U_1,\mathcal U_2)$ peut être vide (troisième exemple) : avant de chercher des points critiques, vérifier qu'il existe au moins une courbe admissible.
