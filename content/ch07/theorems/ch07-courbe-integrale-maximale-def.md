---
id: ch07-courbe-integrale-maximale-def
type: definition
chapter: 7
title: Intervalle $J_{\tau_0}(x_0)$ et courbe intégrale maximale
ref: Définition VII.3.3
page: 134
importance: 3
depends: [ch07-unicite-globale, ch07-cauchy-lipschitz, ch07-champ-vecteurs-courbe-integrale-def, ch07-localement-lipschitzien-def]
tags: [courbe-integrale-maximale, temps-de-vie, recollement, unicite, solution-maximale]
---
## Intuition

> 💡 On lâche une particule en $x_0$ à l'instant $\tau_0$ et on la suit **aussi longtemps que possible**, vers le futur et vers le passé. Chaque solution du problème de Cauchy n'en montre qu'un morceau ; grâce à l'unicité globale ([[ch07-unicite-globale]]) tous ces morceaux sont compatibles (ils coïncident là où ils sont tous deux définis), donc on peut les **recoller** en une seule courbe, définie sur la réunion $J_{\tau_0}(x_0)$ de tous leurs intervalles. C'est la **courbe intégrale maximale** : toute autre solution de même condition initiale en est une restriction.

$J_{\tau_0}(x_0)$ est le **temps de vie** de la particule : il peut être strictement plus petit que l'intervalle $I$ où le champ est défini, parce que la particule peut partir à l'infini en temps fini ou sortir de l'ouvert $U$.

Rappels : une **courbe intégrale** de $X : I\times U\to E$ de **condition initiale** $(\tau_0,x_0)$ est une courbe $\alpha : J\to U$ de classe $C^1$ sur un intervalle ouvert $J\subset I$ contenant $\tau_0$, avec $\alpha'(t)=X(t,\alpha(t))$ sur $J$ et $\alpha(\tau_0)=x_0$ ([[ch07-champ-vecteurs-courbe-integrale-def]]) ; « localement lipschitzien en la seconde variable » : voir [[ch07-localement-lipschitzien-def]].

## Énoncé

**Définition (poly, Définition VII.3.3, p. 134).** Soit $U$ un ouvert d'un espace de Banach $E$. Soit $X : I\times U\to E$ un champ de vecteurs dépendant du temps. Supposons que $X$ soit localement lipschitzien en la seconde variable. Soit $(\tau_0,x_0)\in I\times U$. Définissons $J_{\tau_0}(x_0)$ comme l'**union de tous les intervalles ouverts $J$ contenant $\tau_0$ tels qu'il existe une courbe intégrale $\alpha : J\to U$ de condition initiale $(\tau_0,x_0)$**. La proposition VII.3.1 ([[ch07-unicite-globale]]) montre qu'il existe une unique courbe intégrale $\alpha_{\tau_0,x_0}$ de condition initiale $(\tau_0,x_0)$ définie sur $J_{\tau_0}(x_0)$. On appelle cette courbe intégrale la **courbe intégrale maximale** de $X$ de condition initiale $(\tau_0,x_0)$.

*Pourquoi la définition a un sens (le poly le laisse au lecteur).*

1. **$J_{\tau_0}(x_0)$ est un intervalle ouvert, contenu dans $I$, contenant $\tau_0$.** La famille d'intervalles est non vide : le théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]) fournit une courbe intégrale de condition initiale $(\tau_0,x_0)$ sur $]\tau_0-\epsilon,\tau_0+\epsilon[$. C'est un ouvert (réunion d'ouverts), contenu dans $I$ (chaque $J$ l'est). C'est un intervalle : si $a<c<b$ avec $a\in J_a$, $b\in J_b$ (deux intervalles de la famille), alors soit $c\le\tau_0$ et $c\in[a,\tau_0]\subset J_a$, soit $c>\tau_0$ et $c\in[\tau_0,b]\subset J_b$.
2. **Recollement.** Pour $t\in J_{\tau_0}(x_0)$, on choisit un intervalle $J\ni t$ de la famille et une courbe intégrale $\alpha_J : J\to U$ de condition initiale $(\tau_0,x_0)$, et on pose $\alpha_{\tau_0,x_0}(t)=\alpha_J(t)$. Ce choix n'influe pas sur la valeur : deux telles courbes $\alpha_J$, $\alpha_{J'}$ coïncident sur $J\cap J'\ni t$ par [[ch07-unicite-globale]].
3. **C'est une courbe intégrale.** Sur chaque $J$ de la famille, $\alpha_{\tau_0,x_0}=\alpha_J$ (point 2 appliqué en chaque point de $J$) ; $J$ étant un voisinage ouvert de chacun de ses points, $\alpha_{\tau_0,x_0}$ est dérivable en $t\in J$ avec $\alpha_{\tau_0,x_0}'(t)=\alpha_J'(t)=X(t,\alpha_{\tau_0,x_0}(t))$. Et $\alpha_{\tau_0,x_0}(\tau_0)=x_0$.
4. **Unicité et maximalité.** Toute courbe intégrale $\beta : J\to U$ de condition initiale $(\tau_0,x_0)$ vérifie $J\subset J_{\tau_0}(x_0)$ (par définition de la réunion) et $\beta=\alpha_{\tau_0,x_0}$ sur $J$ ([[ch07-unicite-globale]]). En particulier $\alpha_{\tau_0,x_0}$ est la seule courbe intégrale définie sur $J_{\tau_0}(x_0)$ de condition initiale $(\tau_0,x_0)$, et elle n'admet aucun prolongement en une courbe intégrale définie sur un intervalle strictement plus grand.

## Hypothèses

### H1 — $X$ localement lipschitzien en la seconde variable

**Rôle.** Il donne l'unicité globale ([[ch07-unicite-globale]]), qui rend le recollement (point 2) cohérent.

**Si on la retire.** Pour $X(t,x)=2\abs x^{1/2}$ sur $I=U=\R$, $(\tau_0,x_0)=(0,0)$ : la réunion des intervalles est $\R$, mais il y a une infinité de courbes intégrales définies sur $\R$ de condition initiale $(0,0)$ ($0$, $t\mapsto\operatorname{signe}(t)t^2$, ou $t\mapsto(t-c)^2$ pour $t>c$ et $0$ sinon, pour tout $c\ge0$). « La » courbe maximale n'est pas définie : on ne sait pas quoi recoller.

### H2 — Les intervalles sont **ouverts** et contiennent $\tau_0$

**Rôle.** Les courbes intégrales sont définies sur des intervalles ouverts ([[ch07-champ-vecteurs-courbe-integrale-def]]), donc $J_{\tau_0}(x_0)$ est **ouvert** : une courbe intégrale maximale n'est jamais définie jusqu'à une borne incluse. Contenir $\tau_0$ est nécessaire pour parler de condition initiale et pour que la réunion soit un intervalle (point 1).

**Si on l'oublie.** On pourrait croire que $J_0(1)=\,]-\infty,1]$ pour $\alpha'=\alpha^2$ (exemple 1) : c'est faux, la solution n'existe pas en $t=1$. En général, si une courbe intégrale était définie en $b=\sup J_{\tau_0}(x_0)$, Cauchy-Lipschitz en $(b,\alpha(b))$ la prolongerait au-delà de $b$.

### H3 — $J_{\tau_0}(x_0)\subset I$

**Rôle.** Une courbe intégrale ne vit que là où le champ est défini.

**Si on l'oublie.** Pour $I=\,]-1,1[$ et $X=0$ sur $I\times\R$, $J_{\tau_0}(x_0)=\,]-1,1[$ pour tout $(\tau_0,x_0)$ : la fonction constante $x_0$ est définie sur $\R$, mais ce n'est une courbe intégrale de $X$ que sur $I$.

## Exemples

**Exemple 1 (explosion en temps fini).** $I=U=\R$, $X(t,x)=x^2$ (de classe $C^1$, donc localement lipschitzien, [[ch07-restriction-domaine-c1-lipschitz]]). Pour $(\tau_0,x_0)=(0,1)$ : $\alpha(t)=\frac1{1-t}$ vérifie $\alpha'(t)=\frac1{(1-t)^2}=\alpha(t)^2$, $\alpha(0)=1$, sur $]-\infty,1[$. On ne peut pas aller plus loin : une courbe intégrale définie sur un intervalle ouvert contenant $1$ coïnciderait avec $\alpha$ sur $[0,1[$ (unicité globale) et serait continue en $1$, alors que $\alpha(t)\to+\infty$ quand $t\to1^-$. Donc
$$
J_0(1)=\,]-\infty,1[\,\subsetneq I=\R,\qquad \alpha_{0,1}(t)=\frac{1}{1-t}.
$$
Plus généralement, pour $x_0<0$ : $\alpha_{0,x_0}(t)=\frac{x_0}{1-x_0t}$ et $J_0(x_0)=\,]1/x_0,+\infty[$ ; pour $x_0=0$ : $\alpha=0$ et $J_0(0)=\R$. Le temps de vie dépend du point de départ.

**Exemple 2 (sortie de l'ouvert).** $U=\,]0,+\infty[$, $X(t,x)=-1$, $I=\R$. La solution de condition initiale $(0,1)$ est $\alpha(t)=1-t$, qui doit rester dans $U$ : $J_0(1)=\,]-\infty,1[$. Ici rien n'explose : la particule atteint le **bord** de $U$ en temps $1$.

**Exemple 3 (solution globale).** $X(t,(x,y))=(y,-x)$ sur $\R\times\R^2$ : $\alpha_{0,(1,0)}(t)=(\cos t,-\sin t)$ et $J_0((1,0))=\R=I$.

## Pièges

* > ⚠️ « Maximale » ne veut **pas** dire « définie sur $I$ » : $J_{\tau_0}(x_0)$ peut être strictement plus petit que $I$ (exemples 1 et 2). Une solution définie sur tout $I$ est dite **globale** ; pour le montrer on utilise typiquement le lemme des bouts ([[ch07-lemme-des-bouts]]).
* $J_{\tau_0}(x_0)$ est toujours **ouvert** : ne jamais écrire $]-\infty,1]$.
* $J_{\tau_0}(x_0)$ dépend du point $x_0$ **et** de l'instant $\tau_0$. Pour un champ autonome (indépendant du temps, $I=\R$), $J_{\tau_0}(x_0)=\tau_0+J_0(x_0)$ et $\alpha_{\tau_0,x_0}(t)=\alpha_{0,x_0}(t-\tau_0)$ : le poly fixe alors $\tau_0=0$ et note $J(x_0)$ ([[ch07-flot-global-def]], [[ch07-translation-temps-autonome]]).
* L'existence de la courbe maximale ne demande pas le lemme de Zorn ici : c'est l'unicité globale qui permet le recollement explicite.
