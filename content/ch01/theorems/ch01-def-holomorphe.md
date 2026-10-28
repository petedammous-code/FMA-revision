---
id: ch01-def-holomorphe
type: definition
chapter: 1
title: Fonction holomorphe, espace $\Hol(\Omega)$
ref: Définition I.1.1
page: 5
importance: 3
depends: [ch01-def-c-derivable]
tags: [holomorphe, definition, hol, c-derivable]
---
## Intuition

> 💡 Une fonction holomorphe est une fonction « de classe $C^1$ au sens complexe » : elle a une dérivée complexe $f'(z)$ ([[ch01-def-c-derivable]]) en **chaque** point d'un ouvert, et cette dérivée varie continûment.

Géométriquement, en chaque point $z$, $f$ ressemble à l'échelle microscopique à $w\mapsto f(z)+f'(z)(w-z)$, c'est-à-dire à une rotation-homothétie ([[ch01-similitude-conforme]]). Demander cela **partout sur un ouvert** est une contrainte énorme : on verra qu'une fonction holomorphe est automatiquement $C^\infty$, développable en série entière ([[ch01-holomorphe-analytique]]), entièrement déterminée par ses valeurs sur un petit disque ([[ch01-prolongement-analytique]]), etc. Rien de tel n'est vrai pour les fonctions dérivables d'une variable réelle.

Un **ouvert** $\Omega$ de $\C$ est une partie telle que pour tout $z\in\Omega$ il existe $r>0$ avec $D(z,r)\subset\Omega$.

## Énoncé

**Définition (poly, Définition I.1.1, p. 5).** Soit $\Omega$ un ouvert de $\C$. On dit qu'une fonction continue $f:\Omega\to\C$ est **holomorphe** si elle est $\C$-dérivable en tout point de $\Omega$ et si $z\mapsto f'(z)$ est continue sur $\Omega$. On note $\Hol(\Omega)$ l'espace vectoriel (sur $\C$) des fonctions holomorphes sur $\Omega$.

Le poly ajoute (p. 5) : l'hypothèse de continuité de $z\mapsto f'(z)$ est en fait superflue ; le théorème de Goursat ([[ch01-goursat]]) montre qu'elle est automatiquement satisfaite dès que $f$ est $\C$-dérivable en tout point de $\Omega$. On la conserve parce qu'elle simplifie les premières démonstrations.

## Hypothèses

### H1 — $\Omega$ est un ouvert

**Rôle.** La $\C$-dérivabilité en $z$ demande de faire tendre $\omega$ vers $0$ dans toutes les directions, donc que $f$ soit définie sur un disque $D(z,r)$ : c'est garanti en tout point d'un ouvert. Convention courante (que le poly ne formalise pas) : « $f$ est holomorphe **au voisinage d'un point** $z_0$ » signifie « $f$ est holomorphe sur un ouvert contenant $z_0$ » ; cela ne doit pas être confondu avec la seule $\C$-dérivabilité en $z_0$.

### H2 — $\C$-dérivable en **tout** point de $\Omega$

**Rôle.** C'est la condition essentielle. Être $\C$-dérivable en un seul point (ou sur une droite) ne suffit pas : $z\mapsto|z|^2$ est $\C$-dérivable en $0$ et en aucun autre point ([[ch01-exemple-zbar-rez-module]]), donc n'est holomorphe sur aucun ouvert non vide.

### H3 — $f'$ continue sur $\Omega$ (hypothèse de confort)

**Rôle.** Elle sert dans les premières preuves du poly, par exemple pour dériver $f\circ\gamma$ le long d'un chemin ([[ch01-derivee-f-rond-gamma]]) et pour la première version de la formule de Cauchy ([[ch01-cauchy-formule-disque]]) ; elle équivaut à dire que $f$ est $C^1$ au sens réel ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]).

**Si on la retire.** La notion ne change pas : d'après le théorème de Goursat ([[ch01-goursat]]), une fonction $\C$-dérivable en tout point d'un ouvert a automatiquement une dérivée continue (et même $C^\infty$). C'est donc une hypothèse **de confort**, qui ne change que les preuves.

### H4 — $f$ continue

**Rôle.** Cadre fixé par le poly ; elle est de toute façon conséquence de la $\C$-dérivabilité en chaque point (si le taux d'accroissement a une limite, $f(z+\omega)-f(z)\to0$).

## Exemples

* **Polynômes.** $z\mapsto z^n$ a pour dérivée $nz^{n-1}$ ([[ch01-def-c-derivable]]), continue : $z^n\in\Hol(\C)$. Par linéarité de la limite, toute combinaison linéaire de fonctions $\C$-dérivables est $\C$-dérivable, de dérivée la combinaison des dérivées ; donc tout polynôme $\sum_k a_kz^k$ est holomorphe sur $\C$, et $\Hol(\Omega)$ est bien un $\C$-espace vectoriel.
* **$1/z$ sur $\C^\times=\C\setminus\{0\}$.** Pour $z\ne0$ et $0<|\omega|<|z|$ :
$$
\frac{1}{\omega}\Bigl(\frac{1}{z+\omega}-\frac1z\Bigr)=\frac{-1}{z(z+\omega)}\xrightarrow[\omega\to0]{}-\frac1{z^2},
$$
fonction continue sur $\C^\times$ : $1/z\in\Hol(\C^\times)$. Plus généralement les fractions rationnelles sont holomorphes hors de leurs pôles ([[ch01-polynomes-fractions-rationnelles]]), et $\exp$, $\cos$, $\sin$ sont holomorphes sur $\C$ ([[ch01-exp-trigo-hyperboliques]]).
* **Contre-exemples.** $z\mapsto\bar z$, $z\mapsto\Re(z)$ ne sont $\C$-dérivables en aucun point, bien que $C^\infty$ au sens réel ; $z\mapsto|z|^2$ ne l'est qu'en $0$. Aucune n'est holomorphe sur un ouvert non vide ([[ch01-exemple-zbar-rez-module]]).

## Pièges

* > ⚠️ « Holomorphe » est une propriété **sur un ouvert**, pas en un point isolé : $|z|^2$ est $\C$-dérivable en $0$ mais n'est holomorphe nulle part.
* Ne pas confondre avec « $C^\infty$ au sens réel » : $\bar z$ est $C^\infty$ en $(x,y)$ et pourtant nulle part $\C$-dérivable. Le bon critère est : $f$ de classe $C^1$ et $\frac{\partial f}{\partial\bar z}=0$ sur $\Omega$ ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]], [[ch01-cauchy-riemann]]).
* $\Hol(\Omega)$ est un espace vectoriel **sur $\C$** (et même une algèbre, stable par produit : [[ch01-stabilite-operations]]) ; $\bar f$ n'est en général pas holomorphe quand $f$ l'est.
* La continuité de $f'$ fait partie de la définition du poly, mais est superflue (Goursat) : en copie, on peut la vérifier sans effort dans les exemples usuels, ou invoquer [[ch01-goursat]].
